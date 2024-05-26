import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice.js';
import { calendarSlice } from './calendar/calendarSlice.js';
import { uiSlice } from './ui/uiSlice.js';


export const store = configureStore({
    reducer: {
        auth:       authSlice.reducer,
        calendar:   calendarSlice.reducer,
        ui:         uiSlice.reducer,
    },
    // Este middleware es para que js no serialize las fechas y evitar el error
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
