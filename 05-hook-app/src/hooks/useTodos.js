import {useEffect, useReducer} from "react";
import {todoReducer} from "../08-useReducer/todoReducer.js";

const initialState = [
    /*{
        id: new Date().getTime(),
        description: 'Recolectar las piedras del alma',
        done: false,
    }*/
];

export const useTodos = () => {

    /**
     * Este init es el que le pasamos a la funcion useReducer
     * en la cual podrmos usar el initialState de la linea 5
     * o de esta manera que es para ver el reducer en accion
     * @returns {any}
     */
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    // El useEffect se dispara cuando el componente se monta
    // y cuando los todos cambian
    useEffect(() => {
        console.log(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        console.log({todo});
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action ); // El dispatch es lo que yo voy a utilizar para llamar la accion
        // del reducer
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatch( action );
    }

    const todosCount = () => todos.length;

    const pendingTodosCount = () => todos.filter( todo => !todo.done ).length;

    return {
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
        todos
    }
}
