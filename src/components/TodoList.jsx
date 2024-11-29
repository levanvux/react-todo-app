import { TodoCard } from "./TodoCard";
import React from "react";

export const TodoList = React.memo((props) => {
    const { todos, selectedTab, handleCompleteTodo, handleDeleteTodo } = props;
    const filteredTodoList = selectedTab === 'All' ? todos : selectedTab === 'Completed' ? todos.filter(val => val.complete) : todos.filter(val => !val.complete);
    return (
        <>
            {filteredTodoList.map((todo) => (
                <TodoCard
                    handleCompleteTodo={handleCompleteTodo}
                    handleDeleteTodo={handleDeleteTodo}

                    key={todo.id}
                    todo={todo}
                />
            ))}
        </>
    );
});
// {...props}
// pass all props to child