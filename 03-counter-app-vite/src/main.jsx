import React from "react";
import ReactDOM from 'react-dom/client';
// import { App } from './HelloWorldApp.jsx';
// import {FirstApp} from './FirstApp.jsx';
import './styles.css';
import {CounterApp} from "./CounterApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Desde aca se le mandan los props o propiedades al componente hijo */}
        {/*<FirstApp/>*/}
        <CounterApp value={13}></CounterApp>
    </React.StrictMode>
)