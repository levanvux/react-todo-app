import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { useState, useCallback, useEffect } from "react"

import { v4 as uuidv4 } from 'uuid'; //npm install uuid

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState('Open');

  // { input: "Finish React course", complete: false },
  // { input: "Write book review", complete: false },
  // { input: "Eat lunch", complete: true }

  const handleAddTodo = useCallback((data) => {
    const newTodos = [...todos, { input: data, complete: false, id: uuidv4() }];
    setTodos(newTodos);
    handleSaveData(newTodos);
  }, [todos]);

  const handleDeleteTodo = useCallback((id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
    handleSaveData(filteredTodos);
  }, [todos]);

  const handleCompleteTodo = useCallback((id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
    handleSaveData(newTodos);
  }, [todos]);

  const handleSaveData = (currTodo) => {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodo }));
    // or this, for short: 
    // localStorage.setItem('todo', JSON.stringify({todos}));
    // * just ignore this :)
  };

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
