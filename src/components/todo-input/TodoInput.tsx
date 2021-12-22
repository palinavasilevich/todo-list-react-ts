import React, { FC } from "react";

interface TodoInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const TodoInput: FC<TodoInputProps> = (props) => {
  const { value, onChange, onKeyPress, onClick } = props;

  return (
    <div className="todo-card todo-card-add">
      <div className="todo-card__btn" onClick={onClick}>
        <button className="todo-button">+</button>
      </div>
      <input
        className="todo-input"
        placeholder="Create a new todo..."
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default TodoInput;
