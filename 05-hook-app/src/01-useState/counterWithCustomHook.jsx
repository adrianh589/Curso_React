import {useCounter} from "../hooks/useCounter.js";

export const CounterWithCustomHook = () => {
  
  const { counter, increment, decrement, reset } = useCounter();
  
    return (
        <>
          <h1>Counter with Hook: { counter }</h1>
          <hr/>
          <button className={"btn btn-danger"} onClick={(event) => decrement(1)}>-1</button>
          <button className={"btn btn-primary"} onClick={reset}>Reset</button>
          <button className={"btn btn-success"} onClick={(event) =>increment(1)}>+1</button>
        </>
    );
}