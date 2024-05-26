import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../src/store/index.js';
import { act, renderHook, waitFor } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks/index.js';
import { Provider } from 'react-redux';
import { initialState, notAuthenticatedState } from '../__fixtures__/authStates.js';
import { testUserCredentials } from '../__fixtures__/testUser.js';
import calendarApi from '../../src/api/calendarApi.js';

const getMockStore = ( initialState ) => {
    return configureStore( {
        reducer: {
            auth: authSlice.reducer
        },
        preloadedState: {
            auth: { ...initialState }
        }
    } )
}

describe( 'Pruebas en useAuthStore', ( object, method ) => {

    beforeEach( () => localStorage.clear() );

    test( 'Debe de regresar los valores por defecto', () => {
        const mockStore = getMockStore( {
            ...initialState
        } );
        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ( { children } ) => <Provider store={ mockStore }>{ children }</Provider>
        } );
        expect( result.current ).toEqual( {
            status: expect.any( String ), // 'checking, 'authenticated', 'not-authenticated'
            user: expect.any( Object ),
            errorMessage: undefined,
            checkAuthToken: expect.any( Function ),
            startLogin: expect.any( Function ),
            startRegister: expect.any( Function ),
            startLogout: expect.any( Function ),
        } );
    } );

    test( 'startLogin debe de realizar el login correctamente', async () => {

        const mockStore = getMockStore( { ...notAuthenticatedState } );

        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ( { children } ) => <Provider store={ mockStore }>{ children }</Provider>
        } );

        await act( async () => {
            await result.current.startLogin( testUserCredentials );
        } );

        const { errorMessage, status, user } = result.current;
        expect( { errorMessage, status, user } ).toEqual( {
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test user', uid: '664f6399e677bad6c7943a47' }
        } );

        expect( localStorage.getItem( 'token' ) ).toEqual( expect.any( String ) );
        expect( localStorage.getItem( 'token-init-date' ) ).toEqual( expect.any( String ) );
    } );

    test( 'startLogin debe de fallar la autenticación', async () => {

        const mockStore = getMockStore( { ...notAuthenticatedState } );

        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ( { children } ) => <Provider store={ mockStore }>{ children }</Provider>
        } );

        await act( async () => {
            await result.current.startLogin( { email: 'emailfalso@falsoo.com', password: 'nopass' } );
        } );

        const { errorMessage, satatus, user } = result.current;
        expect( { errorMessage, satatus, user } ).toEqual( {
                errorMessage: 'Credenciales incorrectas',
                satatus: undefined,
                user: {}
            }
        );

        await waitFor(
            () => expect( result.current.errorMessage ).toBe( undefined )
        );

        expect( localStorage.getItem( 'token' ) ).toBe( null );
    } );

    test( 'Debe de crear un usuario', async () => {

        const newUser = { email: 'emailfalso@falso.com', password: 'nopass', name: 'Test user 2' };

        const mockStore = getMockStore( { ...notAuthenticatedState } );

        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ( { children } ) => <Provider store={ mockStore }>{ children }</Provider>
        } );

        const spy = jest.spyOn( calendarApi, 'post' ).mockReturnValue( {
            data: {
                ok: true,
                msg: 'login',
                uid: '664f6399e677bad6c7943a47',
                name: 'Test user',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjRmNjM5OWU2NzdiYWQ2Yzc5NDNhNDciLCJuYW1lIjoiVGVzdCB1c2VyIiwiaWF0IjoxNzE2NTY2NjIyLCJleHAiOjE3MTY1NzM4MjJ9.mPiSurboV9UfGHwqAsMdlcTbZEJbGnx1dUYz4ml4IgE'
            }
        } );

        await act( async () => {
            await result.current.startRegister( newUser );
        } );

        const { errorMessage, status, user } = result.current;

        expect( { errorMessage, status, user } ).toEqual( {
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test user', uid: '664f6399e677bad6c7943a47' }
        } );

        spy.mockRestore();

    } );

    test( 'startRegister debe de fallar la creación', async () => {

        const mockStore = getMockStore( { ...notAuthenticatedState } );

        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ( { children } ) => <Provider store={ mockStore }>{ children }</Provider>
        } );

        await act( async () => {
            await result.current.startRegister( testUserCredentials );
        } );

        const { errorMessage, status, user } = result.current;

        expect( { errorMessage, status, user } ).toEqual( {
            errorMessage: 'Ya existe un usuario con ese correo',
            status: 'not-authenticated',
            user: {},
        } );


    } );
    
    test('checkAuthToken debe de fallar si no hay un token', async () => {
        const mockStore = getMockStore( { ...initialState } );

        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ( { children } ) => <Provider store={ mockStore }>{ children }</Provider>
        } );

        await act( async () => {
            await result.current.checkAuthToken( );
        } );

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
           errorMessage: undefined,
           status: 'not-authenticated',
           user: {}
        });

    });

    test('checkAuthToken debe de authenticar el usuario si hay un token', async () => {
        const { data } = await calendarApi.post( '/auth', testUserCredentials );
        localStorage.setItem('token', data.token);

        const mockStore = getMockStore( { ...initialState } );

        const { result } = renderHook( () => useAuthStore(), {
            wrapper: ( { children } ) => <Provider store={ mockStore }>{ children }</Provider>
        } );

        await act( async () => {
            await result.current.checkAuthToken();
        } );

        const { errorMessage, status, user } = result.current;

        expect( { errorMessage, status, user } ).toEqual( {
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'Test user', uid: '664f6399e677bad6c7943a47' }
        }   );
    });
} );
