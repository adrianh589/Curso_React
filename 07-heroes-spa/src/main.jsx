import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './styles.css'
import {HeroesApp} from "./HeroesApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    // Recordar que en el modo estricto el useEffect se puede disparar dos veces,
    // algo que es normal, en producción no pasan esas cosas. Nos puede ayudar
    // a detectar errores temprano.
    <React.StrictMode>
        <BrowserRouter>
            <HeroesApp/>
        </BrowserRouter>
    </React.StrictMode>
)
