import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Done from "./Done";
import Footer from "../calendar/Footer";
import { useState } from "react";
import { faForumbee } from "@fortawesome/free-brands-svg-icons";


const Todos = () => {

    const [todoList, setTodoList] = useState(null);
    const [doneList, setDoneList] = useState(null);
    const newTodoURL = 'http://localhost:3001/todos/new';
    const removeTodoURL = 'http://localhost:3001/todos';
    const doneTodoURL = 'http://localhost:3001/todos/done'

    const addTodo = (title, description, time) => {
        fetch(newTodoURL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                time
            })
        })
        .then(res => {
            if (!res.ok){
                throw Error('Não foi possível encontrar o conteúdo')
            }
            return res.json()
        })
        .then(data => {
            setTodoList(data.todoList);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    const removeTodo = (id) => {
        fetch(`${removeTodoURL}/delete/${id}`, {
        })
        .then(res => {
            if (!res.ok){
                throw Error('Não foi possível encontrar o conteúdo')
            }
            return res.json()
        })
        .then(data => {
            setTodoList(data.todoList);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    const setToDone = (id) => {
        fetch(`${doneTodoURL}/${id}`, {
            method: 'put'
        })
        .then(res => {
            if (!res.ok){
                throw Error('Não foi possível encontrar o conteúdo')
            }
            return res.json();
        })
        .then(data => {
            setTodoList(data.todoList);
            setDoneList(data.doneList);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
        <main className="background-img">
            <div className="todo-background-filter">

                <section className="todo-container">
                    <section className="todo-columns">
                        <nav className="navbar">
                            <h1 className="site-title">Adicionar tarefa</h1>
                        </nav>
                        <TodoInput addTodo={addTodo}/>
                    </section>

                    <section className="todo-columns">
                        <nav className="navbar">
                            <h1 className="site-title">Tarefas</h1>
                        </nav>

                        { todoList? todoList.map((todo, id) => {
                            return <TodoList todo={todo} removeTodo={removeTodo}
                            setToDone={setToDone} i={id}/>
                        }) : '' }
                    </section>

                    <section className="todo-columns">
                        <nav className="navbar">
                            <h1 className="site-title">Concluídos</h1>
                        </nav>

                        { doneList? doneList.map((todo, id) => {
                            return <Done todo={todo} />
                        }) : '' }
                    </section>
                </section>
                <Footer/>
            </div>
        </main>
    );
}
 
export default Todos;