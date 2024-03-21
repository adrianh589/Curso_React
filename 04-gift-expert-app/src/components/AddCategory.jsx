import {useState} from "react";
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

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
        console.log('Hola mundo desde el onSubmit para el test');
        event.preventDefault();// Estop evita que se recargue el navegador
        console.log(inputValue);
        if(inputValue.trim().length <= 1) return;
        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        // setValorInput(inputValue.trim()); // Actualizar el valorInput en el componente GiftExpertApp
        console.log('Dispare el onsubmit');
        setInputValue('');
    }

    /**
     * Input que se muestra al usuario
     */
    return (
        // Esto se puede hacer, el tener un form y adentro un input sin un fragmento, lo que NO SE PUEDE HACER
        // es que por ejemplo tenga un form y un input afuera, osea que sean hermanos, ahi SI es obligatorio el FRAGMENTO
        <form onSubmit={(event) => onSubmit(event)} aria-label='form'>
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

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired // Debe proporcionar la funcion obligotoriamente
}