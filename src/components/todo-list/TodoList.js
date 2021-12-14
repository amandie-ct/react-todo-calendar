import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({todo, removeTodo, setToDone, index}) => {

    return (
        <section>
            <div className="todo">
                <h2>{todo.title}</h2>
                <hr/>
                <p>{todo.time}</p>
                <p>{todo.description}</p>

                <div className="btn-td">
                    <button className="del-btn"
                    onClick={() => removeTodo(index)}>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                    <button className="check-btn"
                    onClick={() => setToDone(index)}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                </div>
            </div>
        </section>
    );
}
 
export default TodoList;