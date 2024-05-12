import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';

/**
 * En esta clase hacemos el tema de las rutas
 * aca se establecen las privadas y las publicas
 * @returns {JSX.Element}
 * @constructor
 */
export const AppRouter = () => {

    const authStatus = 'authenticated';

    return (
        <>
            <Routes>
                {
                    ( authStatus === 'not-authenticated' )
                    ? <Route path="/auth/*" element={ <LoginPage/> }/>
                    : <Route path="/*" element={ <CalendarPage/> }/>
                }

                {/* Esta ruta es a prueba de fallos, no es necesaria
                debido a la condicion anterior*/}
                <Route path="/*" element={ <Navigate to="/auth/login"/> }/>
            </Routes>

        </>
    )
}
