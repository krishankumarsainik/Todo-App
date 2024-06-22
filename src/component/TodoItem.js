import React from "react";
import { MdDeleteOutline } from "react-icons/md";


const TodoItem = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            <div className="todo-item" >
                {todo.text}

            </div>
            <div>
                <button className="complete-undo-button" onClick={() => completeTodo(index)}>
                    {todo.isCompleted ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => removeTodo(index)}><MdDeleteOutline className="delete-button" />
                </button>
            </div>
        </div>
    );
};
export default TodoItem;
