/**
 * Paquetes de terceros van de primero
 */
import { Calendar } from 'react-big-calendar';
import { getMessagesES, localizer } from '../../helpers';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../components/Navbar.jsx';
import { CalendarEvent } from '../components/CalendarEvent.jsx';
import { useEffect, useState } from 'react';
import { CalendarModal } from '../components/CalendarModal.jsx';
import { useAuthStore, useUiStore } from '../../hooks/index.js';
import { useCalendarStore } from '../../hooks/useCalendarStore.js';
import { FabAddNew } from '../components/FabAddNew.jsx';
import { FabDelete } from '../components/FabDelete.jsx';

export const CalendarPage = () => {

    const { user } = useAuthStore();

    const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
    const { openDateModal } = useUiStore();
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week' );

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        // console.log({event, start, end, isSelected});
        const isMyEvent = (user.uid === event.user._id) || ( user.uid === event.user.uid );

        const style = {
            backgroundColor: isMyEvent ? '#00fd04' : '#ff0000',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black'
        };

        return { style };
    }

    useEffect( () => {
        startLoadingEvents();
    }, [] );


    const onDoubleClick = (event) => {
        console.log({doubleClick: event});
        openDateModal();
    }

    const onSelect = (event) => {
        console.log({click: event});
        setActiveEvent(event);
    }

    const onViewChanged = (event) => {
        console.log({viewChanged: event});
        localStorage.setItem('lastView', event);
        setLastView(event);
    }
    
    return (
        <>
            <Navbar/>

            <Calendar
                culture='es'
                defaultView={lastView}
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={ { height: 'calc( 100vh - 80px )' } }
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />

            <CalendarModal />
            <FabAddNew />
            <FabDelete />
        </>
    )
}
