import {fireEvent, render, screen} from "@testing-library/react";
import {TodoItem} from "../../src/08-useReducer/index.js";

describe('Pruebas en el componente <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el todo pendiente de completar', () => {

        render(
            <TodoItem todo={todo}
                      onDeleteTodo={onDeleteTodoMock}
                      onToggleTodo={onToggleTodoMock()}/>);

        const liElement = screen.getByRole('listitem');
        console.log(liElement.innerHTML);

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');

        screen.debug();
    })

    test('Debe de mostrar el Todo completado', () => {

        todo.done = true;

        render(
            <TodoItem todo={todo}
                      onDeleteTodo={onDeleteTodoMock}
                      onToggleTodo={onToggleTodoMock()}/>);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

        screen.debug();
    });

    test('El span debe de llamar el ToggleTodo cuando se hace click', () => {

        render(<TodoItem todo={todo}
                         onDeleteTodo={onDeleteTodoMock}
                         onToggleTodo={onToggleTodoMock}
                />)

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('Button debe de llamar el deleteTodo', () => {

        render(<TodoItem todo={todo}
                         onDeleteTodo={onDeleteTodoMock}
                         onToggleTodo={onToggleTodoMock}
        />);

        const buttonElement = screen.getByRole('button', {name: 'Borrar'})
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});
