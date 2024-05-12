import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth';
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from '../../fixtures/authFixtures.js';

describe( 'Pruebas en el authSlice', () => {
    test('Debe de regresar el estado inicial y llamarse "auth"', () => {
        expect(authSlice.name).toBe('auth');

        const state = authSlice.reducer(initialState, {});

        expect(state).toEqual(initialState);
        expect(authSlice.name).toBe('auth');
    });

    test('Debe de realizar la autenticación', () => {
        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: 'authenticated', //  'checkin', 'not-authenticated', 'authenticated'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        });
    });

    test('Debe de realizar el logout sin argumentos', () => {
       const state = authSlice.reducer(authenticatedState, logout());
       expect(state).toEqual( {
           ...notAuthenticatedState,
           errorMessage: undefined
       });
    });

    test('Debe de realizar el logout y mostrar un mensaje de error', () => {
        const errorMessage = 'Credenciales no son correctas';
        const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));
        expect(state).toEqual( {
            ...notAuthenticatedState,
            errorMessage
        });
    });

    test('Debe de cambiar el estado a checking', async () => {
        const state = authSlice.reducer( authenticatedState, checkingCredentials() );
        expect(state.status).toBe('checking');
    });
} );
