import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const LoginPage = () => {

    const {hola, user} = useContext(UserContext);
    console.log(hola, user);
    
    return (
        <>
            <h1>LoginPage</h1>
            <hr/>

            <pre aria-label={'pre'}>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
