import {useEffect, useReducer, useState} from "react";
import {todoReducer} from "./todoReducer.js";
import {TodoList, TodoAdd} from "./";
import {useTodos} from "../hooks/useTodos.js";

export const TodoApp = () => {

    /**
     * Crear un custom hook que se llame useTodos
     *
     * todos, handleDeleteTodo, handleToggleTodo, handleNewTodo,
     *
     * tambien debe ir el init del parse json
     */
    const { todos, todosCount,  pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

    return (
        <>

            <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">

                    {/* TodoList */}
                    <TodoList todos={todos}
                              onDeleteTodo={ id => handleDeleteTodo(id)}
                              onToggleTodo={ handleToggleTodo }
                    ></TodoList>
                    {/*fin TodoList*/}
                </div>

                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr/>
                    {/* ToDoAdd onNewToDo( todo ) */}
                    {/* { id: new Date() ... description: '',  } */}
                    <TodoAdd onNewTodo={ handleNewTodo } />
                    {/* Fin TodoAdd */}
                </div>

            </div>
        </>
    )
}
