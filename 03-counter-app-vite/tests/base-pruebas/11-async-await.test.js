import {getImagen} from "../../src/bases-pruebas/11-async-await.js";

describe('Pruebas con 11-async', () => {
    test('getImagen debe de retornar url de la imagen', async () =>{
        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');
    });
});