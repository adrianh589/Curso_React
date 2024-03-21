import {useRef} from "react";

export const FocusScreen = () => {

    /**
     * El useRef sirve para mantener una referencia
     * y cuando esa referencia cambia, nosotros no disparemos
     * una re renderización del componente.
     * @type {React.MutableRefObject<undefined>}
     */
    const inputRef = useRef();

    const onClick = () => {
        console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <input  type="text"
                    placeholder="Ingrese su nombre"
                    className="form-control"
                    ref={inputRef}
            />

            <button className="btn btn-primary mt-2"
                    onClick={onClick}
            >
                Set Focus
            </button>
        </>
    )
}
