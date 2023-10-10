import {getUser, getUsuarioActivo} from "../../src/bases-pruebas/05-funciones.js";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC132',
            username: 'hulkaso4030'
        };

        const user = getUser();
        console.log(user);

        // No podemos usar toBe porque los objetos aunque
        // tengan las mismas propiedades, son diferentes objetos
        // porque están almacenados en diferentes espacios de memoria
        // expect( testUser ).toBe(user);

        expect(testUser).toStrictEqual(user);
    })

    test('getUsuarioActivo debe retornar un objeto', () =>{
        const name = 'Adrian';
        const testUsuarioActivo = getUsuarioActivo('Adrian');

        expect(testUsuarioActivo).toStrictEqual({
            uid: 'fad645',
            username: name
        });
    })
});