import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Done from "./Done";
import Footer from "../calendar/Footer";

let todo1 = {
    "title": "Montar a árvore",
    "description": "colocar as bolinhas e comprar pisca-pisca",
    "isDone": false,
    "time": "14:45"
}

let todo2 = {
    "title": "Ir na Leroy",
    "description": "comprar sapateiro",
    "isDone": false,
    "time": "09:00"
}

let todo3 = {
    "title": "Brincar com Angelina",
    "description": null,
    "isDone": false,
    "time": "06:00"
}

const todoList = [
    todo1,
    todo2,
    todo3
];

let todo4;
let todo5;

const doneList = [
    todo4 = {
        "title": "lavar a louça",
        "description": null,
        "isDone": true,
        "time": "19:00"
    },
    todo5 = {
        "title": "tirar o lixo",
        "description": "incluir lixo dos banheiros",
        "isDone": true,
        "time": "21:00"
    }
];

// class Todo {
//     constructor(date, title, description, isDone, time){
//         this.date = date;
//         this.title = title;
//         this.description = this.description;
//         this.isDone = false;
//         this.time = time;
//     }


//     addTodo(todo, list) {
//         list.push(todo);
//         return list;
//     }

//     deleteTodo(todo) {
//         todoList.pop(todo);
//         return todoList;
//     }

//     completeTodo(todo) {
//         this.isDone = true;
//         doneList.push(todo);
//         todoList.pop(todo);
//         return doneList;
//     }

// }

const Todos = () => {
    return (
        <main className="background-img">
            <div className="todo-background-filter">

                <section className="todo-container">
                    <section className="todo-columns">
                        <nav className="navbar">
                            <h1 className="site-title">Adicionar tarefa</h1>
                        </nav>
                        <TodoInput />
                    </section>

                    <section className="todo-columns">
                        <nav className="navbar">
                            <h1 className="site-title">Tarefas</h1>
                        </nav>

                        {todoList.map((todo) => {
                            return <TodoList todo={todo} />
                        })}
                    </section>

                    <section className="todo-columns">
                        <nav className="navbar">
                            <h1 className="site-title">Concluídos</h1>
                        </nav>

                        {doneList.map((todo) => {
                            return <Done todo={todo} />
                        })}
                    </section>
                </section>
                <Footer/>
            </div>
        </main>
    );
}
 
export default Todos;