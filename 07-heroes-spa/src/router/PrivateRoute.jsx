import {useContext} from "react";
import {AuthContext} from "../auth/index.js";
import {Navigate, useLocation} from "react-router-dom";

// Componentes que tengan children significa que es un high order component
export const PrivateRoute = ({children}) => {

    const { logged } = useContext(AuthContext);

    /**
     * Guardar la ultima ruta para que al iniciar sesion
     * se deje al usuario donde estaba.
     */

    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (logged) ? children : <Navigate to={'/login'} />;
}
