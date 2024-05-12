import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../../src/auth/pages/index.js';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../src/store/auth/index.js';
import { MemoryRouter } from 'react-router-dom';
import { notAuthenticatedState } from '../../fixtures/authFixtures.js';

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();
jest.mock('../../../src/store/auth/thunks.js', () => ({
    startGoogleSignIn: () => mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({email, password}) => {
        return () => mockStartLoginWithEmailPassword({email, password})
    }
}));

// Dejarlo de esta manera, todo lo que exporte react-redux son mocks de las cuales se soobrescriben el comportamiento
// jest.mock('react-redux');


jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
});

describe( 'Pruebas en el <LoginPage />', () => {

    beforeEach(()=> jest.clearAllMocks());

    test('Debe de mostrar el componente correctamente', () => {
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        // screen.debug();

        expect( screen.getAllByText('Login').length ).toBeGreaterThan(1);
    });
    
    test('Botón de google debe de llamar el startGoogleSignIn', () => {
        render(
            <Provider store={store} >
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        console.log(store.getState());

        const googleBtn = screen.getByLabelText('google-btn');
        // console.log(googleBtn);
        fireEvent.click(googleBtn);
        expect(mockStartGoogleSignIn).toHaveBeenCalled();

    });
    
    test('Submit debe de llamar el startLoginWithEmailPassword', () => {

        const email = 'adrian@gmail.com';
        const password = '123456';

        render(
            <Provider store={store} >
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        // Aqui se muestran diferentes formas de acceder a la variable aparte del famoso aria-label
        const emailField = screen.getByRole('textbox', {name: 'Email'});
        fireEvent.change(emailField, {target: {name: 'email', value: email}});

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, {target: {name: 'password', value: password}});

        const loginForm = screen.getByLabelText('submit-form');
        fireEvent.submit(loginForm);

        // screen.debug();
        expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
           email: email,
           password: password
        });
    });
});
