import { render, screen } from '@testing-library/react';
import { AppRouter } from '../../src/router/index.js';
import { useAuthStore } from '../../src/hooks/useAuthStore.js';
import { MemoryRouter } from 'react-router-dom';
import { CalendarPage } from '../../src/calendar';

jest.mock('../../src/hooks/useAuthStore.js');
jest.mock('../../src/calendar/pages/CalendarPage.jsx', () => ({
   CalendarPage: () => <h1>CalendarPage</h1>
}));

describe( 'Pruebas en <AppRouter />', () => {

    const mockCheckAuthToken = jest.fn();
    beforeEach(()=> jest.clearAllMocks());

    /**
     * Toca pillar que aparezca el Cargando... del AppRouter.jsx y que
     * la función que está dentro del useEffect (checkAuthToken();) haya sido llamada
     */
    test('Debe de mostrar la pantalla de carga y llamar checkAuthToken', () => {
        useAuthStore.mockReturnValue({
           status: 'checking',
            checkAuthToken: mockCheckAuthToken
        });

        render(<AppRouter />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(mockCheckAuthToken).toHaveBeenCalled();
    });

    test('Debe de mostrar el login en caso de no estar authenticado', () => {
        useAuthStore.mockReturnValue({
            status: 'not-authenticated',
            checkAuthToken: mockCheckAuthToken
        });

        const { container } = render(
            <MemoryRouter initialEntries={['/auth2/algo']}>
                <AppRouter />
            </MemoryRouter>
        );

        // screen.debug();

        expect(screen.getByText('Ingreso')).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el calendario si estamos autenticados', () => {
        useAuthStore.mockReturnValue({
            status: 'authenticated',
            checkAuthToken: mockCheckAuthToken
        });

        render(
            <MemoryRouter>
                <AppRouter />
            </MemoryRouter>
        );

        expect(screen.getByText('CalendarPage')).toBeTruthy();
        // expect(container).toMatchSnapshot();
    });

} );
