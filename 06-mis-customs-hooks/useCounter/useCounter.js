import {useState} from "react";

export const useCounter = (initState = 10) => {

    const [counter, setCounter] = useState(initState);

    const increment = (value = 1) => {
        setCounter((current) => current + value);
    }

    const decrement = (value = 1) => {
        setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter(initState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
