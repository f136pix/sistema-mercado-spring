import {useEffect, useState} from "react";
import {deleteAfazerByIdApi, retrieveAfazeresByUsernameApi} from "../../api/AfazerApiService";
import {useAuth} from "../auth/AuthContext";
import {useNavigate} from "react-router-dom";

function ListComponent() {

    const navigate = useNavigate();

    const authContext = useAuth();
    const username = authContext.username;

    const [message, setMessage] = useState();

    const [afazeres, setAfazeres] = useState([]);

    function refreshAfazeres() {
        retrieveAfazeresByUsernameApi(username)
            .then(res => {
                setAfazeres(res.data);
                console.log("Afazeres atualizados :",res);
            })
            .catch(err => console.log("Err ;", err));
    }


    useEffect(// rodar refreshAfazeres
        () => refreshAfazeres()
        // apenas quando renderizar o component
        , [])

    function deleteAfazer(id) {
        deleteAfazerByIdApi(username, id)
            .then(res => {
                refreshAfazeres();
                setMessage(`Afazer deletado`)
            })
    }

    function addNewAfazer() {
        navigate('/afazeres/criar-afazer')
    }

    function updateAfazer(id) {

    }

    return (<div className="ListaTarefasComponent container">


        <h1>Tarefas Pendentes</h1>
        {message && <div className={'alert alert-warning'}>{message}</div>}
        <div>
            <table className='table'>
                <thead>
                <tr>
                    <td>Descricao</td>
                    <td>Completo</td>
                    <td>Data Final</td>
                    <td></td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {

                    afazeres.map(afazer => {
                        return (<tr key={afazer.id}>
                            <td>{afazer.description}</td>
                            <td>{afazer.done.toString()}</td>
                            <td>{afazer.targetDate.toString()}</td>
                            <td>
                                <button className={"btn btn-warning"}
                                        onClick={() => deleteAfazer(afazer.id)}>
                                    DELETAR
                                </button>
                            </td>
                            <td>
                                <button className={"btn btn-success"}
                                        onClick={() => navigate(`/afazeres/${afazer.id}`)}>
                                    ATUALIZAR
                                </button>
                            </td>

                        </tr>)

                    })}
                </tbody>
            </table>
        </div>
        <div>
            <button className={"btn btn-success m-5"} onClick={addNewAfazer}>Adicionar Tarefa</button>
        </div>
    </div>)
}


export default ListComponent