export const events = [
    {
        id: '1',
        title: 'Cumple de Adri',
        notes: 'Hay que comprar el pastel',
        start: new Date('2022-10-21 13:000:00'),
        end: new Date('2022-10-21 15:000:00'),
    },
    {
        id: '2',
        title: 'Cumple de Cami',
        notes: 'Hay que comprar el pastel de Cami',
        start: new Date('2022-11-21 13:000:00'),
        end: new Date('2022-11-21 15:000:00'),
    },
];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
};

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: null
};

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: { ...events[0] }
};
