import {fireEvent, render, screen} from "@testing-library/react";
import {LoginPage} from "../../src/09-useContext/LoginPage.jsx";
import {UserContext} from "../../src/09-useContext/context/UserContext.jsx";

describe('Pruebas en <LoginPage />', () => {

    const user = {
        id: 1,
        name: 'Adrian'
    }

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{hola: 'Hola'}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('Debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock()}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({"email": "adrian@gmail.com"});

    });

});
