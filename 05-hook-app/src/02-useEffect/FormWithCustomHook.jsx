import {useEffect, useState} from "react";
import {useForm} from "../hooks/useForm.js";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

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
            <h1>Formulario con Custom Hook</h1>
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

            <input type="password"
                   className={"form-control mt-2"}
                   placeholder={"Contraseña"}
                   name={"password"}
                   value={password}
                   onChange={onInputChange}
            />

            <button className={"btn btn-primary mt-2"}
                    onClick={onResetForm}
            >
                Borrar
            </button>
        </>
    )
}