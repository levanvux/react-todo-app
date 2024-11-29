import React from "react";
export const Header = React.memo((props) => {
    const { todos } = props;
    const openTodos = todos.filter(todo => !todo.complete);
    return (
        <header>
            <h1 className="text-gradient">You have {openTodos.length} open task{openTodos.length !== 1 ? "s" : ""}.</h1>
        </header>
    );
});