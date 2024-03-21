import {useFetch, useCounter} from "../hooks"
import {LoadingQuote, Quote} from "./";

export const MultipleCustomHooks = () => {

    const { increment, counter } = useCounter(1);
    const {data, isLoading, hasError, imagePokemon} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    console.log({counter});

    console.log({ data, isLoading, hasError, imagePokemon });

    // NOTA: Los hooks no deben ser condicionados, es decir,
    // de manera condicional

    return (
        <>
            <h1>Pokémon Quotes</h1>
            <hr/>

            {(isLoading) ? <LoadingQuote /> : <Quote imagePokemon={imagePokemon} data={data}/>}

            <button className="btn btn-primary" onClick={() => increment()}>
                Next Quote
            </button>
        </>

        /*
        Tarea:
        debo usar el useCounter con la finalidad de aumerntar
        en 1 la api
        * */
    );
}
