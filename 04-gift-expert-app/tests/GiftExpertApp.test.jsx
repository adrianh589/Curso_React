import {fireEvent, render, screen} from "@testing-library/react";
import {GiftExpertApp} from "../src/GiftExpertApp.jsx";
import {GiftItem} from "../src/components/index.js";

describe('Pruebas en <GiftExpertApp />', () => {

    /**
     * TODO:
     * 1. Posteo del formulario y ver que pasa (snapshot)
     * 2. Que pasa si mando la misma categoria
     * 3. Que pasa si mando una categoria diferente
     */

    test('Debe de tomar el snapshot', () => {
        const {container} = render( <GiftExpertApp /> );
        screen.debug();
        expect(container).toMatchSnapshot();
    });

    test('Debe de mandar una categoria', () =>{
        render( <GiftExpertApp /> );

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        console.log(form);

        fireEvent.input(input, {target: {value: 'De prueba'}});
        fireEvent.submit(form);

        screen.debug();
    });
});