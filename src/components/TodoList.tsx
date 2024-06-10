import React from 'react';
import TodoItem from './TodoItem';
import './styles/TodoList.css';

interface TodoListProps {
  todos: string[];
  removeTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
