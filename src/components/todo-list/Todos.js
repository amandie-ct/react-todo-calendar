import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Done from "./Done";


const todoList = [];
const doneList = [];

class Todo {
    constructor(date, title, description, isDone, time){
        this.date = date;
        this.title = title;
        this.description = this.description;
        this.isDone = false;
        this.time = time;
    }

    addTodo(todo, list) {
        list.push(todo);
        return list;
    }

    deleteTodo(todo) {
        todoList.pop(todo);
        return todoList;
    }

    completeTodo(todo) {
        this.isDone = true;
        doneList.push(todo);
        todoList.pop(todo);
        return doneList;
    }

}

const Todos = () => {
    return (
        <main>

            <section>
                <TodoInput/>
            </section>

            <section>
                <TodoList todoList={todoList}/>
            </section>

            <section>
                <Done doneList={doneList}/>
            </section>
        </main>
    );
}
 
export default Todos;