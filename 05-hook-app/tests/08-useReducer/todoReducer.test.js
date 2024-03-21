import {todoReducer} from "../../src/08-useReducer/todoReducer.js";

describe('Pruebas en todoReducer', () => {

    const initialState = [{
       id: 1,
       description: 'Demo Todo',
       done: false
    }];

    test('Debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('Debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    /**
     * Pista:
     * Deberia eliminar el todo del estado inicial
     */
    test('Debe de eliminar un TODO', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        console.log(newState);

        expect(newState.length).toBe(0);
    });

    /**
     * Pista:
     * Deberia de cambiar el toggle de false a true o visceversa
     */
    test('Debe de realizar el Toggle del todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBeTruthy();
    });

});
