import TodoList from "./TodoList";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";


const TodoInput = ({todo}) => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [time, setTime] = useState();
    const [isDone, setDone] = useState(false);
    const [todosList, setTodosList] = useState();
    const todosEndpoint = '/todos/pending';

    return (
        <main>
            <section className="todo-input-background">
                <form>
                    <div className="todo-input-container">
                        <label for="todo-title" className="labels">Título</label>
                        <input type="text" id="todo-title" className="input" name="title"
                        onChange={(value) => setTitle(value)}/>
                    </div>

                    <div className="todo-input-container">
                        <label for="description" className="labels">Descrição (opcional)</label>
                        <input type="textarea" id="description" className="input" name="description"
                        onChange={(value) => setDescription(value)}/>
                    </div>

                    <div className="todo-input-container">
                        <label for="time" className="labels">Hora</label>
                        <input type="time" className="input" name="time"
                        onChange={(value) => setTime(value)}/>
                    </div>

                    <div className="btn-td-input">
                        <button className="add-todo-btn"
                        onClick={() => addTodo(todo)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default TodoInput;