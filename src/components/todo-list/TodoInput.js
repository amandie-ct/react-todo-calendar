import TodoList from "./TodoList";

const TodoInput = () => {

    return (
        <div>
            <label for="todo-title">Título (opcional)</label>
            <input type="text" id="todo-title"></input>

            <label for="description">Descrição</label>
            <input type="textarea" id="description"></input>
            
            <label for="time">Hora</label>
            <input type="datetime-local"></input>
            
            <button>Adicionar</button>
        </div>
    );
}
 
export default TodoInput;