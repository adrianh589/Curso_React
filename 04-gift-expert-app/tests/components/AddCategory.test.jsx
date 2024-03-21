import {fireEvent, render, screen} from "@testing-library/react";
import {AddCategory} from "../../src/components/index.js";

describe('Pruebas en <AddCategory />', () => {
    test('Debe de cambiar el valor de al caja de texto', () =>{
        render(<AddCategory onNewCategory={() => {}} />);
        // screen.debug();
        const input = screen.getByRole('textbox'); // Como solo tengo un input, es facil encontrarlo, en jest se llama textbox y no input

        fireEvent.input(input, { target: { value: 'Saitama' } });

        screen.debug();

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () =>{

        const inputValue = 'Saitama';

        const onNewCategory = jest.fn(); // Esto simulara a la funcion onMewCategory pero no es la implementacion real de la funcion


        //TODO
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); // Se debe establecer un aria-label al formulario del componente o si no, no lo leerá y la prueba fallará

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form); // Disparar el submit del formulario
        // screen.debug();
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('No debe de llamar el onNewCategory si el input está vacio', () => {

        const onNewCategory = jest.fn(); // Esto simulara a la funcion onMewCategory pero no es la implementacion real de la funcion
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form'); // Se debe establecer un aria-label al formulario del componente o si no, no lo leerá y la prueba fallará

        fireEvent.submit(form); // Disparar el submit del formulario

        // expect(onNewCategory).toHaveBeenCalledTimes(0); // Forma 1
        expect(onNewCategory).not.toHaveBeenCalled(); // Forma 2
    });

});