
const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {


    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span>{todo.text}</span>
            <div className="todo-actions">
                <button
                    onClick={() => toggleTodo(todo.id)}
                    className="toggle-button"
                >
                    {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="delete-button"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;