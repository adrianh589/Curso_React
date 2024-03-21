import {Link, Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage.jsx";
import {LoginPage} from "./LoginPage.jsx";
import {AboutPage} from "./AboutPage.jsx";
import {NavBar} from "./NavBar.jsx";
import {UserProvider} from "./context/UserProvider.jsx";

export const MainApp = () => {
    return (
        <>
            <UserProvider>
                <h1>MainApp</h1>

                <NavBar/>

                <hr/>

                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </UserProvider>
        </>
    )
}
