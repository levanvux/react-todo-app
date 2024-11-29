import React from "react";
export const TodoCard = React.memo((props) => {
    const { todo, handleCompleteTodo, handleDeleteTodo } = props;
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                {/* 
                James teaches me *
                <button disabled={todo.complete} onClick={() => { handleCompleteTodo(todo.id) }}>
                    <h6>Done</h6>
                </button> */}
                <button onClick={() => { handleCompleteTodo(todo.id) }}>
                    <h6>{todo.complete ? "Restore" : "Done"}</h6>
                </button>
                <button onClick={() => { handleDeleteTodo(todo.id) }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    );
});