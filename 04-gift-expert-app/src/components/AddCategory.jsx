import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    /**
     * Funcion que cambia el valor del input al momento de escribir una tecla
     * @param event
     */
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    /**
     * Cuando se le da enter
     * @param event
     */
    const onSubmit = (event) => {
        event.preventDefault();// Estop evita que se recargue el navegador
        if(inputValue.trim().length <= 1) return;
        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setValorInput(inputValue.trim()); // Actualizar el valorInput en el componente GiftExpertApp
        console.log('Dispare el onsubmit');
        setInputValue('');
    }

    /**
     * Input que se muestra al usuario
     */
    return (
        // Esto se puede hacer, el tener un form y adentro un input sin un fragmento, lo que NO SE PUEDE HACER
        // es que por ejemplo tenga un form y un input afuera, osea que sean hermanos, ahi SI es obligatorio el FRAGMENTO
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                // onChange={ (event) => onInputChange(event) } // Forma tradicional
                onChange={  onInputChange } // Forma recortada, lo mismo de arriba pero como solo tengo un argumento puedo dejarlo asi
            />

            <button type={"submit"}>Agregar</button>
        </form>
    )
}