const getTodos = (url) => {
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error('Não foi possível encontrar o conteúdo')
        }
        return res.json()
    })
    .then(data => {
        setTodosList(data.todoList);
    })
    .catch(err => {
        console.log(err.message);
    })
}

const addTodo = (url, todo) => {
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error('Não foi possível encontrar o conteúdo')
        }
        return res.json()
    })
    .then(todo => {
        setTodosList([...todoList, todo]);
    })
    .catch(err => {
        console.log(err.message);
    })
}

const removeTodo = (url, todo) => {
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error('Não foi possível encontrar o conteúdo')
        }
        return res.json()
    })
    .then(todo => {
        todoList.filter(todos => {
            return todos !== todo;
        })
    })
    .catch(err => {
        console.log(err.message);
    })
}

const setToComplete = (todo, url) => {
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error('Não foi possível encontrar o conteúdo')
        }
        return res.json()
    })
    .then(todo => {
        todo.setIsDone(true)
        doneList.push(todo)
        removeTodo();
    })
}