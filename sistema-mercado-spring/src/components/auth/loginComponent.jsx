import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./AuthContext";

function LoginComponent() {

    {/* state do uncontrolled component username */}
    const [username, setUsername] = useState('filipe')
    {/* state do uncontrolled component senha */}
    const [senha, setSenha] = useState('')
    {/* state err message */}
    const [showErrMessage, setErrMessage] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth()

    function handleUsernameChange( e ) {
        setUsername(e.target.value);
    }
    function handleSenhaChange( e ) {
        setSenha(e.target.value);
    }

    function handleSubmit() {
        if(authContext.autenticarUser(username,senha)){
            navigate(`/main/${username}`) // redirect get para root/index

        } else {
            setErrMessage(true)
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            {showErrMessage && <div className="err-msg">Autenticação falhou. Por favor verifique as credenciais</div>}
            <div className="login-div">
                <div className="login-form">
                    <div>
                        <label>User Name</label>
                        <input type="text" name="username" value={ username } onChange={ handleUsernameChange } />  {/* uncontrolled component */}
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type="password" name="senha" value={ senha } onChange={ handleSenhaChange }/> {/* uncontrolled component */}
                    </div>
                    <div>
                        <button type="button" name="login" onClick={ handleSubmit }>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent