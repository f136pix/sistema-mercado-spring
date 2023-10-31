import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {retrieveIndexBean} from "./api/indexApiService";

function IndexComponent() {
    function restApi() {
        retrieveIndexBean()
         .then((response) => setMessage(response.data))
         .catch((err) => console.log(err))
         .finally(() => console.log("Executado"));
  }

  const [message, setMessage] = useState(null);

  const { username } = useParams(); //userParams.username

  return (
    <div className="index">
      <h1>Bem vindo {username}</h1>
      <div>
        <h2>
          Suas tarefas <Link to="/afazeres">aqui</Link>
        </h2>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={restApi}>
          Rest Api
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}

export default IndexComponent;
