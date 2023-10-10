import React from 'react';
import {fireEvent, getByRole, getByTestId, render, screen} from "@testing-library/react";
import {CounterApp} from "../src/CounterApp.jsx";

describe('Pruebas para Counter App', () => {
    const value = 100;
    test('Debe de hacer match con el snapshot', () => {

        const {container} = render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el valor inicial de 100', () => {
        const {container, getByTestId} = render(<CounterApp value={value}/>);
        expect(screen.getByText(100)).toBeTruthy();
    })

    test('Debe incrementar con el botón +1', () => {
        render(<CounterApp value={value}/>);
        // Hacer simulación de click
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText('101')).toBeTruthy();
    })

    test('Debe incrementar con el botón -1', () => {
        render(<CounterApp value={value}/>);
        // Hacer simulación de click
        fireEvent.click( screen.getByText('-1') );
        expect(screen.getByText('99')).toBeTruthy();
    })

    test('Debe de funcionar el botón de reset', () => {
        render(<CounterApp value={value}/>);
        // Hacer simulación de click
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );

        // Otra forma de acceder al boton
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect(screen.getByText('100')).toBeTruthy();
    })
});