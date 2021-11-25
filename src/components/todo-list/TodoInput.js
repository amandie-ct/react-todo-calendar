import TodoList from "./TodoList";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoInput = () => {

    return (
        <main>
            <section className="todo-input-background">
                    <div className="todo-input-container">
                        <label for="todo-title" className="labels">Título</label>
                        <input type="text" id="todo-title" className="input" />
                    </div>

                    <div className="todo-input-container">
                        <label for="description" className="labels">Descrição (opcional)</label>
                        <input type="textarea" id="description" className="input" />
                    </div>

                    <div className="todo-input-container">
                        <label for="time" className="labels">Hora</label>
                        <input type="time" className="input" />
                    </div>

                    <div className="btn-td-input">
                        <button className="add-todo-btn">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
            </section>
        </main>
    );
}

export default TodoInput;