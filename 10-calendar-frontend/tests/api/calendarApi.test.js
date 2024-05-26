import calendarApi from '../../src/api/calendarApi.js';

describe( 'Pruebas en el CalendarApi', () => {
    test('Debe de tener la configuración por defecto', () => {
        // console.log(calendarApi);
        // console.log(process.env);
        expect( calendarApi.defaults.baseURL ).toBe(process.env.VITE_API_URL)
    });

    test('Debe de tener el x-token en el header de todas las peticiones', async () => {
        const token = 'ABC-123-XYZ';
        localStorage.setItem('token', token);
        // No importa si existe el api
        const res = await calendarApi.get('/auth');

        expect(res.config.headers['x-token']).toBe(token);
    });
});
