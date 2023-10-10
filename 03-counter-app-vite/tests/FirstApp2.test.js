import React from 'react';
import {render, screen} from '@testing-library/react';
import {FirstApp} from "../src/FirstApp.jsx";


describe('Pruebas en <FirstApp', () => {

    const title = 'asfd';
    const subtitle = 'Soy un subtitulo';

    test('Debe hacer match con el snapshot', () => {

        // Crea un root para la renderización
        const {container} = render(
            <React.StrictMode>
                <FirstApp title={title} subtitle={'aa'}/>
            </React.StrictMode>
        );
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje "Hola, soy goku"', () => {
        render(
            <React.StrictMode>
                <FirstApp title={title} subtitle={'aa'}/>
            </React.StrictMode>
        );

        expect(screen.getByText(title)).toBeTruthy();

    });

    test('Debe de mostrar el titulo en un h1', () => {
        render(
            <React.StrictMode>
                <FirstApp title={title} subtitle={'aa'}/>
            </React.StrictMode>
        );
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        render(
            <React.StrictMode>
                <FirstApp title={title} subtitle={subtitle}/>
            </React.StrictMode>
        );
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(subtitle);
    });
});
