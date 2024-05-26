import { fireEvent, render, screen } from '@testing-library/react';
import { FabDelete } from '../../../src/calendar/index.js';
import { useCalendarStore } from '../../../src/hooks/useCalendarStore.js';

jest.mock('../../../src/hooks/useCalendarStore.js');

describe( 'Pruebas en <FabDelete />', () => {

    const mockStartDeletingEvent = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el componente correctamente', () => {

        useCalendarStore.mockReturnValue({
           hasEventSelected: false
        });

        render(<FabDelete />);

        const btn = screen.getByLabelText('btn-delete');
        expect(btn.classList).toContain('btn');
        expect(btn.classList).toContain('btn-danger');
        expect(btn.classList).toContain('fab-danger');
        expect(btn.style.display).toBe('none');
    });

    test('Debe de mostrar el botón si hay un evento activo', () => {

        useCalendarStore.mockReturnValue({
            hasEventSelected: false
        });

        render(<FabDelete />);
        screen.debug();

        const btn = screen.getByLabelText('btn-delete');
        // expect(btn.classList).toContain('btn');
        expect(btn.classList).toContain('btn-danger');
        expect(btn.classList).toContain('fab-danger');
        expect(btn.style.display).toBe('none');
    });
    
    test('Debe de llamar startDeletingEvent si hay evento activo', () => {
        useCalendarStore.mockReturnValue({
            hasEventSelected: true,
            startDeletingEvent: mockStartDeletingEvent
        });

        render(<FabDelete />);

        const btn = screen.getByLabelText('btn-delete');
        fireEvent.click(btn);
        expect(mockStartDeletingEvent).toHaveBeenCalled();
    });
} );
