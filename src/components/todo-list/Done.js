import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Done = () => {

let todo = {
    title: 'brincar com angelinda',
    description: 'de noite',
    time: '12:00'
}
    return (
        <section>
            <div className="todo done">
                <div className="done-title">
                    <h2>{todo.title}</h2>
                    <h2><FontAwesomeIcon icon={faCheck}/></h2>
                </div>
                <hr/>
                <p>{todo.time}</p>
                <p>{todo.description}</p>
            </div>
        </section>
    );
}
 
export default Done;