import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/index.js';

const mockedUseNavigate = jest.fn();
jest.mock( 'react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Toma todo lo que exporta la libreria
    useNavigate: () => mockedUseNavigate,
}) );
describe( 'Pruebas en <SearchPage />', () => {

    beforeEach(()=> jest.clearAllMocks());

    test( 'Debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();

        // screen.debug();

    } );

    test( 'Debe de mostrar a Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={ ['/search?q=batman'] }>
                <SearchPage/>
            </MemoryRouter>
        );

        // Saber si el input tiene el nombre de batman
        const input = screen.getByRole( 'textbox' );
        expect( input.value ).toBe( 'batman' );

        // screen.debug();

        /**
         * Know if the card is present, in this case
         * just the url is enough
         */

        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

        // screen.debug();
    } );

    test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => {
        render(
            <MemoryRouter initialEntries={ ['/search?q=batman123'] }>
                <SearchPage/>
            </MemoryRouter>
        );

        // screen.debug();

        const alert = screen.getAllByText('No hero with');

        expect(alert).toBeTruthy();
    });

    test('Debe de llamar el navigate a la pantalla nueva', async () => {
        render(
            <MemoryRouter initialEntries={ ['/search'] }>
                <SearchPage/>
            </MemoryRouter>
        );

        // Get the input
        const input = screen.getByLabelText('Search a hero');

        // Simulate writing inside the input
        fireEvent.input(input, { target: {value: 'Holi'} });

        // Fire the onSubmit event
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        // Verify if the function navigate has been called with the search text
        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=Holi');

    });
} );
