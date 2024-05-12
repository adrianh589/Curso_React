import {render, screen} from "@testing-library/react";
import {AuthContext} from "../../src/auth/index.js";
import {PrivateRoute} from "../../src/router/PrivateRoute.jsx";
import {MemoryRouter} from "react-router-dom";

describe('Pruebas en el <PrivateRoute />', () => {

    test('Debe de mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Adrian'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1> Ruta privada </h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });

});
