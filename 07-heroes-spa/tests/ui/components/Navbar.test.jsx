import { AuthContext } from '../../../src/auth/index.js';
import { Navbar } from '../../../src/ui/index.js';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

const mockedUseNavigate = jest.fn();
jest.mock( 'react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Toma todo lo que exporta la libreria
    useNavigate: () => mockedUseNavigate,
}) );

describe( 'Pruebas en <Navbar />', () => {


    const contextValue = {
        logged: true,
        user: { name: 'SAUREX', id: 'ABC' },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    // Esta ya soy capaz de hacerlo segun el teacher
    test( 'Debe de mostrar el nombre del usuario logueado', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText( 'SAUREX' ).textContent ).toBeTruthy();

    } );

    // Almenos llegar al del logout
    test( 'Debe de llamar el logout y navigate cuando se hace click en el botón de logout', () => {

        /*render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutButton = screen.getByRole( 'button' );
        fireEvent.click( logoutButton );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith( '/login', { 'replace': true } );
        */
    } );

} );
