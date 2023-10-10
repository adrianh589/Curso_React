import {getHeroeByIdAsync} from "../../src/bases-pruebas/09-promesas.js";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe', () => {
        const id = 1;

        return getHeroeByIdAsync(id)
            .then( (heroe) => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
            })
    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', () => {
        const id = 99;

        return getHeroeByIdAsync(id)
            .then( hero => { // este then no deberia ir, esta demas
                expect(hero).toBeFalsy();
            } )
            .catch( error => {
                console.log(error);
                expect(error).toEqual('No se pudo encontrar el héroe');
            })
    });
});