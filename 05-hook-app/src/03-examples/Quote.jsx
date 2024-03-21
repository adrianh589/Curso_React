import PropTypes from "prop-types";
import {useLayoutEffect, useRef, useState} from "react";

export const Quote = ( {imagePokemon, data} ) => {

    console.log(imagePokemon);
    console.log(data);

    const fReg = useRef();

    const [boxSize, setBoxSize] = useState({width: 0, height: 0})

    useLayoutEffect(() => {
        const { height, width } = fReg.current.getBoundingClientRect();
        setBoxSize({width, height});
    }, [data]); // REcordar que este array significa las dependencias,
    // cada vez que X valor cambie osea que ponemos el valor
    // que cada vez que cambie dentro de estas llaves

    return (
        <>
            <blockquote className="blockquote text-right"
                        style={{display: "flex"}}
            >
                <img src={imagePokemon} className="mb-1" alt={'No image'}></img>
                <footer className="blockquote-footer" ref={fReg}>
                    {data.name}
                </footer>
            </blockquote>

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}

Quote.propTypes = {
    imagePokemon: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
}


