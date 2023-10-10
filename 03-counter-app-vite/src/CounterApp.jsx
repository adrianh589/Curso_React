import { useState } from 'react';
import {number} from "prop-types";

export function CounterApp({ value }) {

    const [ counter, setCounter ] = useState( value );

    function handleAdd () {
        // console.log(event);
        // value ++;
        // console.log(value);
        // document.getElementById('valor').innerText = value;
        // setCounter(counter + 1);
        setCounter((c) => c + 1); // Ambas formas son validas
    }

    function handleSubstract(){
        setCounter((c) => c - 1);
    }

    function handleReset(){
        setCounter(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2 id='valor'> { counter } </h2>
            {/*<button onClick={(event) => handleAdd(event)}>+1</button>*/}
            <button onClick={handleAdd}>+1</button> {/*Es lo mismo que arriba pero mas simplificado*/}
            <button onClick={handleSubstract}>-1</button>
            <button aria-label={'btn-reset'} onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes ={
    value: number
}

