import {
    calendarSlice,
    onAddNewEvent,
    onDeleteEvent, onLoadEvents, onLogoutCalendar,
    onSetActiveEvent,
    onUpdateEvent
} from '../../../src/store/index.js';
import {
    calendarWithActiveEventState,
    calendarWithEventsState,
    events,
    initialState
} from '../../__fixtures__/calendarStates.js';

describe( 'Pruebas en calendarSlice', () => {
    test('Debe de regresar el estado por defecto', () => {
        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialState);
    });
    
    test('onSetActiveEvent debe de activar el evento', () => {
        const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent(events[0]) );
        expect(state.activeEvent).toEqual(events[0]);
    });

    test('onAddNewEvent debe de agregar el evento', () => {
        const newEvent = {
                id: '3',
                title: 'Cumple de Adri otra xd',
                notes: 'Hay que comprar el pastel xd',
                start: new Date('2020-10-21 13:000:00'),
                end: new Date('2020-10-21 15:000:00'),
            };

        const state = calendarSlice.reducer(calendarWithActiveEventState, onAddNewEvent(newEvent));
        expect(state.events).toEqual([...events, newEvent]);
    });

    test('onUpdateEvent debe de actualizar el evento', () => {
        const updatedEvent = {
            id: '1',
            title: 'Cumple de Adri otra xd actualizado',
            notes: 'Hay que comprar el pastel xd actualizada',
            start: new Date('2020-10-21 13:000:00'),
            end: new Date('2020-10-21 15:000:00'),
        };

        const state = calendarSlice.reducer(calendarWithActiveEventState, onUpdateEvent(updatedEvent));
        expect(state.events).toContain(updatedEvent);
    });

    test('onDeleteEvent debe de borrar el elemento activo', () => {
        // calendarWithActiveEventState
        const state = calendarSlice.reducer(calendarWithActiveEventState, onDeleteEvent());
        expect(state.events).not.toContain(state);
        expect(state.activeEvent).toBe(null);
    });

    test('onLoadEvents debe de establecer los eventos', () => {
        // initialState
        const state = calendarSlice.reducer(initialState, onLoadEvents(events));
        expect(state.isLoadingEvents).toBeFalsy();
        expect(state.events).toEqual(events);

        const newState = calendarSlice.reducer(state, onLoadEvents(events));
        expect(state.events.length).toBe(events.length);
    });

    test('onLogoutCalendar debe de limpiar el estado', () => {
        // calendarWithActiveEventState
        const state = calendarSlice.reducer(calendarWithActiveEventState, onLogoutCalendar());
        expect(state).toEqual(  initialState );
    });
} );
