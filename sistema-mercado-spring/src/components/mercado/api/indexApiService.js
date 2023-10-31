import axios from "axios";

export const retrieveIndexBean= () => axios.get("http://localhost:8080/hello-world");