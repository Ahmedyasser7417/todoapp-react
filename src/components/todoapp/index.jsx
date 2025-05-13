import { useState } from 'react';
import TodoItem from '../todoItem';
import TodoInput from '../todoinput';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

const addTodo = (text) => {
    setTodos([...todos, {
        id: Date.now(),
        text,
        completed: false
    }]);
};

const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
};

const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
};

return (
    <div className="todo-app">
        <h1>Todo App</h1>
        <TodoInput addTodo={addTodo} />
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
        </div>
    );
}

export default TodoApp;
