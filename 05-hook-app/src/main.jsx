import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import {MultipleCustomHooks} from "./03-examples/index.js";
import {FocusScreen} from "./04-useRef/FocusScreen.jsx";
import {Layout} from "./05-useLayoutEffect/Layout.jsx";
import {Memorize} from "./06-memos/Memorize.jsx";
import {MemoHook} from "./06-memos/MemoHook.jsx";
import {CallbackHook} from "./06-memos/CallbackHook.jsx";
import {Padre} from "./07-tarea-memo/Padre.jsx";
import './08-useReducer/intro-reducer.js';
import {TodoApp} from "./08-useReducer/TodoApp.jsx";
import {MainApp} from "./09-useContext/MainApp.jsx";
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {ErrorPage} from "./09-useContext/ErrorPage.jsx";
import {HomePage} from "./09-useContext/HomePage.jsx";
import {LoginPage} from "./09-useContext/LoginPage.jsx";
import {AboutPage} from "./09-useContext/AboutPage.jsx";
import {UserContext} from "./09-useContext/context/UserContext.jsx";
import {UserProvider} from "./09-useContext/context/UserProvider.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainApp/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'about',
                element: <AboutPage/>
            },
        ],
    },
    {
        path: "/*",
        element: <AboutPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContext.Provider value={{hola: 'Holiviris'}}>
        <LoginPage />
    </UserContext.Provider>
)
