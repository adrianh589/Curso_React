import {getGifs} from "../../src/helpers/getGifs.js";

describe('Pruebas en el getGifs()', () => {
    test('Debe de retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('One Punch');
        console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0); // Con esto se que minimo habra un elemento
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url:expect.any(String)
        })
    });
});