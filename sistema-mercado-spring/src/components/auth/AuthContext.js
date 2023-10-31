import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

// hook para acesso de AuthContext
export const useAuth = () => useContext(AuthContext)

// criando um context provider
export default function AuthProvider({ children }) { // sera compartilhado entre todas as childs

    const [autenticado, setAutenticado] = useState(false)

    function autenticarUser(username, senha)  {
        if( username === 'filipe' && senha === '123' ){
            setAutenticado(true);
            return true
        } else {
            return false
        }
    }

    function logoutUser() {
        setAutenticado(false)
    }


    return (
        <AuthContext.Provider value={ { autenticado, autenticarUser, logoutUser} }>
            {children}
        </AuthContext.Provider>
    )
}