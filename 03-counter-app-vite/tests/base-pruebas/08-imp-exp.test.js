import {getHeroById, getHeroesByOwner} from "../../src/bases-pruebas/08-imp-exp.js";
import heroes from "../../src/data/heroes.js";

describe('pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () =>{
        const id = 1;
        const heroe = getHeroById(id);

        expect(heroe).toEqual({id: 1, name: 'Batman', owner: 'DC'});
    });

    test('getHeroeById debe retornar un undefined si no existe el id', () =>{
        const id = 100;
        const heroe = getHeroById(id);

        expect(heroe).toBeFalsy();
    });

    /**
     * Tarea:
     * Debe retornar un areglo con los heroes de DC
     * length === 3
     * toEqual al arreglo filtrado
     */
    test('getHeroesByOwner Debe retornar un areglo con los heroes de DC', ()=>{
        const DcHeroes = getHeroesByOwner('DC');
        console.log(DcHeroes);

        // Evaluamos que solo sean heroes de DC
        for (const heroe of DcHeroes) {
            // console.log(heroe);
            expect(heroe.owner).toEqual('DC');
        }

        // Evaluamos que en realidad traiga 3 heroes
        expect(DcHeroes.length).toEqual(3);

        // Evaluamos que solo traiga heroes de DC tambien
        expect(DcHeroes).toEqual(heroes.filter(heroe => heroe.owner === 'DC'))
    })

    /**
     * Debe de retornar un arreglo conn los héroes de Marvel
     * length === 2
     */
    test('getHeroesByOwner Debe de retornar un arreglo conn los héroes de Marvel', ()=>{
        const MarvelHeroes = getHeroesByOwner('Marvel');
        expect(MarvelHeroes.length).toEqual(2);
    })
});