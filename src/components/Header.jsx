import React from "react";
export const Header = React.memo((props) => {
    const { todos } = props;
    return (
        <header>
            <h1 className="text-gradient">You have {todos.length} open task{todos.length !== 1 ? "s" : ""}.</h1>
        </header>
    );
});