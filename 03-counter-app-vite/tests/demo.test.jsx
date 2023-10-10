
// Con este describe solo indicamos que etamos probando,
// nos sirve para ver el titulo de lo que se está probando
describe('Pruebas en <Demo Component/>', () =>{

    test('Esta prueba no debe de fallar', () =>{
        // Estos son pruebas a la antigua, Jest lo hace mucho mas facil
        // if( 0 === 0 ){
        //     throw new Error('No se puede dividir entre 0');
        // }

        /**
         * NOTA:
         * Para tener las ayudas del IDE o editor de codigo,
         * debemos instalar: yarn add -D @types/jest
         *
         */

            // JEST:
            //1. Inicialización
        const message1 = 'Hola mundo';

        //2. Estímulo
        const message2 = message1.trim();

        //3. Observar comportamiento ... esperado
        expect(message1).toBe(message2);
    })

});
