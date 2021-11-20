import TodoList from "./TodoList";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoInput = () => {

    return (
            <section>
                <div className="todo-input-background">
                    <label for="todo-title" className="labels">Título (opcional)</label>
                    <input type="text" id="todo-title" className="input"></input>

                    <label for="description" className="labels">Descrição</label>
                    <input type="textarea" id="description"  className="input"></input>
                
                    <label for="time" className="labels">Hora</label>
                    <input type="time" className="input"></input>

                    <div className="btn-td-input">
                        <button className="add-todo-btn">
                            Adicionar&nbsp;
                            <FontAwesomeIcon icon={faPlus}/>
                            </button>
                    </div>
                </div>
            </section>
    );
}
 
export default TodoInput;