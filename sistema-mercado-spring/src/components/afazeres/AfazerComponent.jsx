import {createAfazerApi, retrieveAfazeresById, updateAfazer, updateAfazerApi} from "../../api/AfazerApiService";
import {useAuth} from "../auth/AuthContext";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import moment from "moment";

export default function AfazerComponent() {

    const [description, setDescription] = useState();

    const [targetDate, setTargetDate] = useState();

    // get url params
    ///root/afazeres/:id
    const {id} = useParams();

    const authContext = useAuth();
    const username = authContext.username;

    const navigate = useNavigate();

    useEffect(() => {
        retrieveAfazer()
    }, [id]);

    function retrieveAfazer() {
        // route criar nao ha afazer para ser retrieved
        if (id == 'criar-afazer') {
            return
        }
        retrieveAfazeresById(username, id)
            .then(res => {
                console.log("Afazer encontrado :", res);
                setAttributesAfazer(res.data);
            })
            .catch(err => console.log("Err :", err));
    }

    function setAttributesAfazer(data) {
        setDescription(data.description);
        setTargetDate(data.targetDate);
    }

    {/* values sao parametros passados e gerenciados automaticamente pelo Formik */
    }

    function onSubmit(values) {
        const afazer = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }

        // route criar nao ha afazer para ser retrieved
        if (id == 'criar-afazer') {
            afazer.id = -1
            createAfazerApi(username, afazer)
                .then(res => {
                    console.log(res);
                    navigate('/afazeres')
                })
                .catch(err => console.log("Err :", err))
                .finally(console.log(afazer))
            return
        }
        updateAfazerApi(username, id, afazer)
            .then(res => {
                console.log(res);
                navigate('/afazeres')
            })
            .catch(err => console.log("Err :", err))
    }

    function validateDados(values) {
        let errs = {};

        if (values.description.length < 5) {
            errs.description = "Deve conter ao menos 5 caracteres"
        }

        if (values.targetDate == null || values.targetDate == '' || !moment(values.targetDate).isValid()) {
            errs.targetDate = "Insira uma data válida"
        }

        return errs;
    }

    return (

        <div className={"container"}>
            <h1>Edite seu afazer</h1>
            <div>
                <Formik initialValues={{description, targetDate}}
                        enableReinitialize={true}
                        validate={validateDados}
                        onSubmit={onSubmit}
                        validateOnChange={false}
                        validateOnBlur={true}>
                    {
                        (props) => (
                            <Form> {/* html form */}
                                <fieldset className={"form-goup"}>
                                    <label>Descricao</label>
                                    <Field className={"form-control"} type={"text"}
                                           name={"description"}></Field> {/* html input atribuido a const description */}
                                </fieldset>
                                <ErrorMessage name={"description"} component={"div"} className={"alert alert-warning"}/>
                                <fieldset className={"form-goup"}>
                                    <label>Data-Alvo</label>
                                    <Field className={"form-control"} type={"date"} name={"targetDate"}></Field>
                                </fieldset>
                                <ErrorMessage name={"targetDate"} component={"div"} className={"alert alert-warning"}/>
                                <div>
                                    <button className={"btn btn-success m-5"} type={"submit"}>SALVAR</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>)
}