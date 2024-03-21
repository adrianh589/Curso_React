import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const HomePage = () => {

    const {user, setUser} = useContext(UserContext);


    return (
        <>
            <h1>HomePage</h1>
            <small>{user?.name}</small>
            <hr/>

            <pre aria-label='pre'>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button className="btn btn-primary"
                    onClick={() => setUser({
                        id: 123,
                        name: 'Pedro',
                        email: 'pedro@pedro.com'
                    })}
            >
                Establecer Usuario
            </button>
        </>
    )
}
