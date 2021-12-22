import React, { FC } from "react";
import { ITodo } from "../types/types";
import TodoFilters from "./TodoFilters";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITodo[];
  activeFilter: string;
  removeTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  changeFilter: (e: React.MouseEvent<HTMLDivElement>) => void;
  clearCompletedTodos: () => void;
}

const TodoList: FC<TodoListProps> = (props) => {
  const {
    todos,
    removeTodo,
    completeTodo,
    activeFilter,
    changeFilter,
    clearCompletedTodos,
  } = props;
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
      <TodoFilters
        countItems={todos.length}
        activeFilter={activeFilter}
        changeFilter={changeFilter}
        clearCompletedTodos={clearCompletedTodos}
      />
    </ul>
  );
};

export default TodoList;
