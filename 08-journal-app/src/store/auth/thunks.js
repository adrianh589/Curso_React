/**
 * Recordar que los thunks son para tareas asíncronas y se usan dispatch
 * y si se quieren usar tareas sincronas se usan los reducers.
 *
 * Sin embargo va a discreción de cada personas
 */
import { checkingCredentials, login, logout } from './';
import {
    loginWithEmailPassword,
    logoutFirebase,
    registerUserWithEmailPassword,
    signInWithGoogle
} from '../../firebase/providers.js';
import { loadNotes } from '../../helpers/index.js';
import { clearNotesOnLogout, setNotes } from '../journal/index.js';

export const checkingAuthentication = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

/**
 * Usualmente se le pone al inicio start para indicar que será una
 * tarea asíncrona.
 */
export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();

        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );

    }
}

export const startCreatingUserWithEmailPassword = ( { email, password, displayName } ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword( { email, password, displayName } )

        if ( !ok ) return dispatch( logout( { errorMessage }) );

        dispatch( login({ uid, displayName, email, photoURL }) );
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    // Dependiendo de lo que devuelva la funcion, debo llamar el logout o login respectivo
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await loginWithEmailPassword( { email, password } );
        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ) );
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();
        dispatch( clearNotesOnLogout() );
        dispatch( logout() );
    }
}

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('User UID does not exist');

       const notes = await loadNotes( uid );

       dispatch(setNotes(notes));
    }
}
