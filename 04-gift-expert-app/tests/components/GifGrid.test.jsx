import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";
import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";

// Hacer un mpck compoleto de este path
jest.mock('../../src/hooks/useFetchGifs.js');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'https://www.saitama.com'
            },
            {
                id: 'xyz',
                title: 'Goku',
                url: 'https://www.goku.com'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);

    });
});