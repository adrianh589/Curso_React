import {useCounter} from "../hooks/index.js";
import {useMemo, useState} from "react";


const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i ++) {
        console.log('Ahi vamos');
    }

    return`${iterationNumber} iteraciones realizadas`;
}


/**
 * El memo hook funciona para qcuando yo necesite guardar de manera
 * inmediata una accion, cambio, objeto etc etc, por ejemplo una
 * peticion a X servidor y este es muy pesado, por lo que ahora
 * necesitaremos guardar su estado, esto evita tener que volver a llamar
 * a la peticion y nos ahorra a nosotros mucho tiempo
 *
 *  Se utiliza para evitar que un componente se vuelva a renderizar
 *  innecesariamente si sus props no han cambiado.
 * @returns {JSX.Element}
 * @constructor
 */

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr/>

            <h4>{memorizedValue}</h4>

            <button className="btn btn-primary"
                    onClick={() => increment()}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
