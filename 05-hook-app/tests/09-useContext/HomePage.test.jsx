import {render, screen} from "@testing-library/react";
import {HomePage} from "../../src/09-useContext/HomePage.jsx";
import {UserContext} from "../../src/09-useContext/context/UserContext.jsx";

describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Adrian'
    }

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria label

        expect(preTag.innerHTML).toBe('null');

        screen.debug();
    });

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria label

        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());

        // screen.debug();
    });
});
