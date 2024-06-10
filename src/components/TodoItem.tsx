import React from 'react';
import './styles/TodoItem.css';

interface TodoItemProps {
  todo: string;
  index: number;
  removeTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, removeTodo }) => {
  return (
    <li className="todo-item">
      {todo}
      <button onClick={() => removeTodo(index)}>Удалить</button>
    </li>
  );
};

export default TodoItem;
