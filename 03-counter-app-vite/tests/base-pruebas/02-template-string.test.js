import {getSaludo} from "../../src/bases-pruebas/02-template-string.js";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar Hola Adrian', () =>{
        const name = 'Adrian';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    })
});