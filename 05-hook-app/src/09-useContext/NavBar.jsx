import {Link, NavLink} from "react-router-dom";

export const NavBar = () => {
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <Link className="navbar-brand" to="/">Navbar</Link>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">

                        <NavLink
                            className={({isActive}) => {
                                // console.log({args});
                                return `nav-link ${isActive ? 'active' : ''}`
                            }}
                            to="/">
                            Home
                        </NavLink>

                        <NavLink
                            className={({isActive}) => {
                                // console.log({args});
                                return `nav-link ${isActive ? 'active' : ''}`
                            }}
                            to="/about">
                            About
                        </NavLink>

                        <NavLink
                            className={({isActive}) => {
                                // console.log({args});
                                return `nav-link ${isActive ? 'active' : ''}`
                            }}
                            to="/login">
                            Login
                        </NavLink>
                    </ul>
                </div>
            </nav>
            {/*En vez de la etiqueta <a> </a>
            es mejor usar links para evitar que haga refresh
            y de esa manera evitar que vuelva a cargar react
            y todos sus componentes al hacer click en cada uno
            de ellos
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="login">Login</Link>

            Un higher order component es un componente de alto orden
            que tiene otros componentes dentro
            */}
        </>
    )
}
