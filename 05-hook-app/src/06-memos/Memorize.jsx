import {useCounter} from "../hooks/index.js";
import {Small} from "./Small.jsx";
import {useState} from "react";

/**
 * El memorize funciona para qcuando yo necesite guardar de manera
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

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr/>

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
