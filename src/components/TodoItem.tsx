import React, { FC, useState } from "react";
import { ITodo } from "../types/types";
import classnames from "classnames";

interface ITodoItemProps extends ITodo {
  removeTodo: (id: string) => void;
  completeTodo: (id: string) => void;
}

const TodoItem: FC<ITodoItemProps> = (props) => {
  const { id, title, isCompleted, removeTodo, completeTodo } = props;

  const handleClick = (id: string): (() => void) => {
    return (): void => removeTodo(id);
  };

  const handleChange = (id: string): (() => void) => {
    return (): void => completeTodo(id);
  };

  console.warn("TodoItem");

  return (
    <li className="todo-card todo-item" draggable={true}>
      <div
        className={classnames("todo-card__btn", {
          "todo-item__check": isCompleted,
        })}
      >
        <input
          className="todo-item__checkbox"
          type="checkbox"
          checked={isCompleted}
          onChange={handleChange(id)}
        />
      </div>
      <span
        className={classnames("todo-item__text", { complete: isCompleted })}
      >
        {title}
      </span>
      <button onClick={handleClick(id)}>
        <span className="todo-item__cross">x</span>
      </button>
    </li>
  );
};

export default React.memo(TodoItem);
