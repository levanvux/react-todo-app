import React, { useState } from "react";

export const TodoInput = React.memo((props) => {
    const { handleAddTodo } = props;
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="input-container">
            <input
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputValue.trim() !== '') {
                        handleAddTodo(inputValue);
                        setInputValue('');
                    }
                }}
                placeholder="Add task"
            />
            <button onClick={() => {
                if (!inputValue) return;
                handleAddTodo(inputValue);
                setInputValue('');
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
});