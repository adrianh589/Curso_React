import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks/index.js';
import { useEffect } from 'react';

/**
 * En esta clase hacemos el tema de las rutas
 * aca se establecen las privadas y las publicas
 * @returns {JSX.Element}
 * @constructor
 */
export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();
    const authStatus = 'not-authenticated';

    useEffect( () => {
        checkAuthToken();
    }, [] );


    if ( status === 'checking' ) {
        return ( <h3>Cargando...</h3> )
    }

    return (
        <Routes>
            {
                ( status === 'not-authenticated' )
                    ? (
                        <>
                            <Route path="/auth/*" element={ <LoginPage/> }/>
                            <Route path="/*" element={ <Navigate to="/auth/login"/> }/>
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={ <CalendarPage/> }/>
                            <Route path="/*" element={ <Navigate to="/"/> }/>
                        </>
                    )
            }
        </Routes>
    )
}

