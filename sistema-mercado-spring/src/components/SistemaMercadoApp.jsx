import './afazeres/SistemaMercado.css'
import {useState} from "react";
import {BrowserRouter, Link, Navigate, Route, Routes, useNavigate, useParams} from "react-router-dom";
import LogoutComponent from "./auth/LogoutComponent";
import FooterComponent from "./partials/FooterComponent";
import HeaderComponent from "./partials/HeaderComponent";
import ListComponent from "./afazeres/ListaAfazeresComponent";
import AfazerComponent from "./afazeres/AfazerComponent";
import IndexComponent from "./IndexComponent";
import ErrComponent from "./err/ErrorComponent";
import LoginComponent from "./auth/loginComponent";
import AuthProvider, {useAuth} from "./auth/AuthContext";


function AutenticarRoute({ children }) { // middlewhere auth
   const authContext = useAuth();

   if(authContext.autenticado){
    return ( children )
   } else {
       return <Navigate to={"/login"} /> // nao autenticado -> redirect para login
   }
}

export default function SistemaMercadoApp() {
    return (
        <div className="appMercado">
            <AuthProvider>
            <BrowserRouter>
            <HeaderComponent></HeaderComponent>
                <Routes>
                    <Route path={'/login'} element={<LoginComponent />} />
                    <Route path={'/main/:username'} element={ <AutenticarRoute><IndexComponent /></AutenticarRoute> } />
                    <Route path={'/afazeres'} element={ <AutenticarRoute><ListComponent /></AutenticarRoute> } />
                    <Route path={'/afazeres/:id'} element={ <AutenticarRoute><AfazerComponent /></AutenticarRoute> } />
                    <Route path={'/logout'} element={<LogoutComponent />} />
                    <Route path='*' element={<ErrComponent />} /> {/* err routing */}
                </Routes>
            <FooterComponent></FooterComponent>
            </BrowserRouter>
            </AuthProvider>
        </div>
    )
}




