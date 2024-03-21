import {useEffect, useState} from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        imagePokemon: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

      const resp = await fetch(url);
      const data = await resp.json();
      const getForms = await fetch(data.forms[0].url);
      const dataForms = await getForms.json();
      const imagePokemon = dataForms.sprites.front_default;

      setState({
          data,
          imagePokemon,
          isLoading: false,
          hasError: null
      });

        console.log(imagePokemon);
    }

    useEffect(() => {
        getFetch();
    }, [url]);


  return (
      {
          data:         state.data,
          imagePokemon: state.imagePokemon,
          isLoading:    state.isLoading,
          hasError:     state.hasError,
      }
          )
}
