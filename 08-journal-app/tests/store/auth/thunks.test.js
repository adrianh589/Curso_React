import {
    checkingAuthentication,
    startGoogleSignIn,
    startLoginWithEmailPassword, startLogout
} from '../../../src/store/auth/thunks.js';
import { checkingCredentials, login, logout } from '../../../src/store/auth/index.js';
import { demoUser } from '../../fixtures/authFixtures.js';
import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from '../../../src/firebase/providers.js';
import { clearNotesOnLogout } from '../../../src/store/journal/index.js';

// mock de todas las funciones de este archivo, si queremos que sean individuales,
// ponemos como segundo argumento una función anónima y especificamos.
jest.mock('../../../src/firebase/providers.js');

describe( 'Pruebas en AuthThunks', () => {

    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() );

    test('Debe de invocar el checkingCredentials', async () => {
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    test('startGoogleSignIn debe de llamar checkingCredentials y login - Exito', async () => {
        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );

        // thunk
        await startGoogleSignIn()( dispatch );

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() );
        expect(dispatch).toHaveBeenCalledWith( login(loginData) );
    });

    test('startGoogleSignIn debe de llamar checkingCredentials y logout - Error', async () => {
        const loginData = { ok: false, errorMessage: 'Hubo un error en google' };
        await signInWithGoogle.mockResolvedValue( loginData );

        // thunk
        await startGoogleSignIn()( dispatch );

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials() );

        expect(dispatch).toHaveBeenCalledWith( logout(loginData.errorMessage) );
    });
    
    test('startLoginWithEmailPassword debe de llamar checking credentials y login - Exito', async () => {
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue( loginData );

        await startLoginWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
    });

    test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async () => {
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesOnLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());
    });
} );
