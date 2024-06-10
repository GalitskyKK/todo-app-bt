import React, { useState } from 'react';
import './components/styles/App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </header>
    </div>
  );
};

export default App;
