import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onLoadEvents } from '../store/index.js';
import { calendarApi } from '../api/index.js';
import { convertEventsToDateEvents } from '../helpers/convertEventsToDateEvents.js';
import Swal from 'sweetalert2';

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );
    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }

    const startSavingEvent = async ( calendarEvent ) => {
        try {
            if ( calendarEvent.id ) {
                // Actualizando
                const { data } = await calendarApi.put( `/events/${ calendarEvent.id }`, calendarEvent );
                dispatch( onUpdateEvent( { ...calendarEvent, user } ) );
                return;
            }
            // Creando
            const { data } = await calendarApi.post( '/events', calendarEvent );
            console.log( data );

            dispatch( onAddNewEvent( { ...calendarEvent, id: data.evento.id, user } ) );
        } catch ( error ) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }
    }

    const startDeletingEvent = async () => {
        try {
            console.log(activeEvent);
            const data = await calendarApi.delete(`/events/${activeEvent.id}`);
            console.log(data);
            dispatch( onDeleteEvent() );
        } catch ( error ){
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }
    }

    const startLoadingEvents = async () => {
        try {
            const { data } = await calendarApi.get( '/events' );
            const events = convertEventsToDateEvents( data.eventos );
            dispatch( onLoadEvents( events ) );
            console.log( { events } );
        } catch ( e ) {
            console.log( e );
            console.log( 'Error cargando eventos' );
        }
    }

    return {
        // Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        // Metodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        startLoadingEvents
    }
}
