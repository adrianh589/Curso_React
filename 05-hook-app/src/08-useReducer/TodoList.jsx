import PropTypes from "prop-types";
import {TodoItem} from "./TodoItem.jsx";

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {

    return (
        <>
            <ul className="list-group">
                {
                    todos.map((todo) => {
                        return <TodoItem todo={todo}
                                         key={todo.id}
                                         onDeleteTodo={ id => onDeleteTodo(id) }
                                         onToggleTodo={ onToggleTodo }
                        />
                    })
                }
            </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}
