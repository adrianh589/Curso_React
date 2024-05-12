import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase/config.js';
import { login, logout } from '../store/auth/index.js';
import { onAuthStateChanged } from 'firebase/auth';
import { startLoadingNotes } from '../store/auth/thunks.js';

export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect( () => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            console.log(user);
            if(!user) return dispatch(logout());
            const { uid, email, displayName, photoURL } = user;
            dispatch(login({ uid, email, displayName, photoURL }));
            dispatch(startLoadingNotes());
        }) // Es como el observable de angular, pero es propio de firebase
    }, [] );

    return status;

}
