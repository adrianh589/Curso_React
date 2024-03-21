import {fireEvent, render, screen} from "@testing-library/react";
import {MultipleCustomHooks} from "../../src/03-examples/index.js";
import {useFetch} from "../../src/hooks/useFetch.js";
import {useCounter} from "../../src/hooks/useCounter.js";

jest.mock('../../src/hooks/useFetch.js');
jest.mock('../../src/hooks/useCounter.js');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    // Antes de cada prueba
    beforeEach( () => {
       jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            imagePokemon: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Pokémon Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton).toBeTruthy();

        screen.debug();

    });

    test('Debe de mostrar un Pokémon', () => {

        useFetch.mockReturnValue({
            data: {
                name: 'ivysaur',
            },
            imagePokemon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);

        expect(screen.getByText('ivysaur')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect(nextButton.disabled).toBeFalsy();

        screen.debug();
    });

    test('Debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: {
                name: 'ivysaur',
            },
            imagePokemon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        fireEvent.click(nextButton);

        /**
         * Tarea:
         * Debo saber si la funcion increment esta siendo llamada
         */
        expect(mockIncrement).toHaveBeenCalled();
    });
});
