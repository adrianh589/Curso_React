import React from 'react';
import {render} from '@testing-library/react';
import {FirstApp} from "../src/FirstApp.jsx";


describe('Pruebas FirstApp', () => {

    test('Debe hacer match con el snapshot', () => {
        const title = 'asfd';

        // Crea un root para la renderización
        const {container} = render(
            <React.StrictMode>
                <FirstApp title={title} subtitle={'aa'}/>
            </React.StrictMode>
        );
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el titulo en un H1', () => {
        const title = 'Hola Soy Goku';

        // Crea un root para la renderización
        const {container, getByText, getByTestId} = render(
            <React.StrictMode>
                <FirstApp title={title} subtitle={'aa'}/>
            </React.StrictMode>
        );
        expect(getByText(title)).toBeTruthy;

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);

        expect( getByTestId('test-title').innerHTML ).toContain(title);

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola Soy Goku';
        const subtitle = 'Soy un subtitulo';

        const { getByText } = render(
          <FirstApp
              title={ title }
              subtitle={ subtitle }
          />
        );

        expect( getByText(title) ).toBeTruthy();
    });

});
