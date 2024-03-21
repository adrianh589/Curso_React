import {Hijo} from './Hijo.jsx'
import {useCallback, useMemo, useState} from 'react';

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);


    const incrementar = useCallback(
        (num) => {
            setValor((oldValue) => oldValue + num)
        },
        [],
    );

    // console.log(memoriza);


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr/>

            {
                numeros.map( n => (
                    <Hijo
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }/>
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}

/*
numeros.map( n => (
    <Hijo
        key={ n }
        numero={ n }
        incrementar={ incrementar }/>
))*/
