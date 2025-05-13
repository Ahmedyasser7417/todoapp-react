import { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={text}
                onChange={(myEvent) => {
                    setText(myEvent.target.value)
                }}
                placeholder="Add a todo..."
                className="todo-input"
            />
            <button type="submit" className="add-button">Add Todo</button>
        </form>
    )
}

export default TodoInput;