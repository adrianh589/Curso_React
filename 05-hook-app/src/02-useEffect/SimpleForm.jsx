import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'saurex@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ] : value
        });
    }

    // El useEffect se llama una vez, en consola vemos 2 veces
    // pero es por el modo estricto que tiene el main
    useEffect(() => {
        console.log("useEffect called")
    }, []);
    // no se recomienda usar useEffect sin dependencias,
    // las cuales son las condiciones por las cuales nosotros queremos
    // que useEffect se vuelva a disparar.

    // Poner el arreglo vacio, [] indica que queremos que el useEffect
    // se dispare una unica vez cuando el componente es montado.

    // React recomienda que si tenemos muchos useEffect, éste debe
    // ser dividido entre mas useEffects con la finalidad de
    // mantener el codigo legible.

    useEffect(() => {
        // console.log("formState changed")
    }, [formState]);
    // Poner esta dependencia, indica que
    // quiero que este useEffect se lance cuando el formState cambie,
    // (parecido al observable)

    useEffect(() => {
        // console.log("email changed")
    }, [email]);



    return (
        <>
            <h1>Simple Form</h1>
            <hr/>

            <input
                type="text"
                className={"form-control"}
                placeholder={"username"}
                name={"username"}
                value={username}
                onChange={onInputChange}
            />

            <input type="email"
                   className={"form-control mt-2"}
                   placeholder={"ahoyos@gmail.com"}
                   name={"email"}
                   value={email}
                   onChange={onInputChange}
            />

            {
                (username === 'strider2') && <Message />
            }



        </>
    )
}