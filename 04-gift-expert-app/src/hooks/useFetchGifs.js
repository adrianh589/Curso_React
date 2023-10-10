// Un hook es una función que regresa algo

import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    // Use Effect se usa para disparar un efecto secundario, en este caso se usa para evitar multiples llamados al back
    useEffect(() => { // No se puede poner async ya que useEffect siempre espera una funcion y no promesas
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}