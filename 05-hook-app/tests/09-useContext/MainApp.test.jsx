import {render, screen} from "@testing-library/react";
import {MainApp} from "../../src/09-useContext/MainApp.jsx";
import {MemoryRouter} from "react-router-dom";

describe('Pruebas en el componente <MainApp />', () => {

    test('Debe de mostrar el HomePage', () => {
        render(
            // Este memoryRouter actua como el browserrouter,
            // pero como no estamos en el navegador, este lo reemplaza para las
            // pruebas que aquí se necesitan.
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        screen.debug();

        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('Debe de mostrar el LoginPage', () => {
        render(
            // Este memoryRouter actua como el browserrouter,
            // pero como no estamos en el navegador, este lo reemplaza para las
            // pruebas que aquí se necesitan.

            // Este initialEntries maneja la ruta en la que queremos estar
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        // screen.debug();

        expect( screen.getByText('LoginPage') ).toBeTruthy();
    });
    
});
