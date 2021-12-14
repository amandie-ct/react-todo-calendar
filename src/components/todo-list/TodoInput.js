    import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";


const TodoInput = ({addTodo}) => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [time, setTime] = useState();

    return (
        <main>
            <section className="todo-input-background">
                    <div className="todo-input-container">
                        <label htmlFor="todo-title" className="labels">Título</label>
                        <input type="text" id="todo-title" className="input" name="title"
                        onChange={(e) => setTitle(e.target.value)}/>
                    </div>

                    <div className="todo-input-container">
                        <label htmlFor="description" className="labels">Descrição (opcional)</label>
                        <input type="textarea" id="description" className="input" name="description"
                        onChange={(e) => setDescription(e.target.value)}/>
                    </div>

                    <div className="todo-input-container">
                        <label htmlFor="time" className="labels">Hora</label>
                        <input type="time" className="input" name="time"
                        onChange={(e) => setTime(e.target.value)}/>
                    </div>

                    <div className="btn-td-input">
                        <button className="add-todo-btn"
                        onClick={() => addTodo(title, description, time)}>
                           <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
            </section>
        </main>
    );
}

export default TodoInput;