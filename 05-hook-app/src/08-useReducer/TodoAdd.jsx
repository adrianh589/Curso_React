import {useForm} from "../hooks/index.js";

export const TodoAdd = ({onNewTodo}) => {

    const {description, formState, onResetForm, onInputChange} = useForm({
       description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        }

        onNewTodo(newTodo);
        onResetForm();
    }



    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input type="text"
                       placeholder="que hay que hacer?"
                       className="form-control mb-1"
                        onChange={onInputChange}
                       name={"description"}
                />

                <button type={"submit"}
                        className={"btn btn-outline-primary"}
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
