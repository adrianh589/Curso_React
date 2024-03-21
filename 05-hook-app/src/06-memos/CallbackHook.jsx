import {useCallback, useState} from "react";
import {ShowIncrement} from "./ShowIncrement.jsx";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // Sirve para memorizar funciones
    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => value + c);
        },
        [],
    );
    

    /*const incrementFather = () => {
        setCounter(counter + 1);
    }*/

    return (
        <>
            <h1>useCallback: {counter}</h1>
            <hr/>

            <ShowIncrement increment={incrementFather} />
        </>
    )
}
