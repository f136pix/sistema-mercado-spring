import {Link} from "react-router-dom";
import {useAuth} from "../auth/AuthContext";



function HeaderComponent() {

    // auth context
    const authContext = useAuth()
    const estaAutenticado = authContext.autenticado;

    function logout() {
        authContext.logoutUser()
    }

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://github.com/f136pix?tab=repositories">adMkt</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">{estaAutenticado && <Link className="nav-link" to="/main/filipe">Home</Link>}</li>
                                <li className="nav-item fs-5">{estaAutenticado && <Link className="nav-link" to="/afazeres">Afazeres</Link>}</li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">{!estaAutenticado && <Link className="nav-link" to="/login">Login</Link>}</li>
                            <li className="nav-item fs-5">{estaAutenticado && <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent