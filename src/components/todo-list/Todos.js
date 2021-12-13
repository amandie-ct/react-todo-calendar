import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Done from "./Done";
import Footer from "../calendar/Footer";


const Todos = () => {

    let todoList = null;
    let doneList = null;
    return (
        <main className="background-img">
            <div className="todo-background-filter">

                <section className="todo-container">
                    <section className="todo-columns">
                        <nav className="navbar">
                            <h1 className="site-title">Adicionar tarefa</h1>
                        </nav>
                        <TodoInput/>
                    </section>

                    <section className="todo-columns">
                        <nav className="navbar">
                            <h1 className="site-title">Tarefas</h1>
                        </nav>

                        {todoList && todoList.map((todo) => {
                            return <TodoList todo={todo} />
                        })}
                    </section>

                    <section className="todo-columns">
                        <nav className="navbar">
                            <h1 className="site-title">Concluídos</h1>
                        </nav>

                        {doneList && doneList.map((todo) => {
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