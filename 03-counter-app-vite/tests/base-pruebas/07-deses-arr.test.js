import {retornaArreglo} from "../../src/bases-pruebas/07-deses-arr.js";

describe('Pruebas en 07-deses-arr', () => {
    test('Debe de retornar un string y un numero', () =>{

        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
    });
});