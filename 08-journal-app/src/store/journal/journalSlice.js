import { createSlice } from '@reduxjs/toolkit';

/**
 * TODO lo que se coloca en los reducers debe ser trabajo sincrono
 */

export const journalSlice = createSlice( {
    name: 'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        active: null,
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = false;
        },
        addNewEmptyNote: ( state, action ) => {
            console.log(action);
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.isSaving = false;
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: ( state, { payload } ) => {
            state.notes = payload;
        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: ( state, { payload } ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => (note.id === state.active.id) ? state.active : note );

            state.messageSaved = `${state.active.title}, actualizada correctamente`;
        },
        setPhotosToActiveNote: ( state, { payload = [] } ) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...payload ];
            state.isSaving = false;
        },
        clearNotesOnLogout: (state, action) => {
            state.isSaving = false;
            action.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: ( state, action ) => {
            state.active = null;
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        }
    },
} );

export const {
    addNewEmptyNote,
    clearNotesOnLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
} = journalSlice.actions;
