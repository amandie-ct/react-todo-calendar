import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Done = ({todo}) => {
    return (
        <section>
            <div className="todo done">
                <div className="done-title">
                    <h2>{todo.title}</h2>
                    <h2><FontAwesomeIcon icon={faCheck}/></h2>
                </div>
                <p>{todo.time}</p>
                <p>{todo.description}</p>
            </div>
        </section>
    );
}
 
export default Done;