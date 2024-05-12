import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/index.js';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter.jsx';


describe('Pruebas en <AppRouter />', () => {

    test('Debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('Login').length).toBe(2);

    });

    test('Debe de mostrar el componente de Marvel si está autenticado', () => {
        const contextValue = {
            logged: true,
            user: {name: 'Adrian'}
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const enlaces = screen.getAllByText('More information'); // Obtiene todos los elementos con el texto 'More Information'

        expect(enlaces.length).toBeGreaterThanOrEqual(1); // Verifica si hay más de un enlace con ese text

    });

});
