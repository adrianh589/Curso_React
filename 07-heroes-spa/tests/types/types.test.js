import {types} from "../../src/auth/types/types.js";

describe('Prueba en "Types"', () => {
    test('Debe de regresar estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });
    });
});
