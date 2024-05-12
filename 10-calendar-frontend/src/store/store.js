import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './ui/uiSlice.js';
import { calendarSlice } from './calendar/calendarSlice.js';


export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer,
    },
    // Este middleware es para que js no serialize las fechas y evitar el error
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
