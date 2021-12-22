import React, { FC, ReactEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoInput from "../../components/todo-input/TodoInput";
import TodoList from "../../components/TodoList";
import TodoFilters from "../../components/TodoFilters";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

import { TodoActionCreators } from "../../store/reducers/tasks/action-creators";
import { FilterActionCreators } from "../../store/reducers/filters/action-creators";
import { ITodo } from "../../types/types";

const Todo: FC = () => {
  const [title, setTitle] = useState("");

  const { todos } = useTypedSelector((state) => state.tasks);

  const { activeFilter } = useTypedSelector((state) => state.filters);

  const dispatch: AppDispatch = useDispatch();

  const addTask = () => {
    if (title) {
      const newTodo = {
        id: uuidv4(),
        title,
        isCompleted: false,
      };
      dispatch(TodoActionCreators.addTodo(newTodo));

      setTitle("");
    }
  };

  const removeTodo = (id: string): void => {
    dispatch(TodoActionCreators.removeTodo(id));
  };

  const completeTodo = (id: string): void => {
    dispatch(TodoActionCreators.completeTodo(id));
  };

  const handleClick = (): void => {
    addTask();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setTitle(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ): void => {
    if (e.key === "Enter") addTask();
  };

  const changeFilter: React.MouseEventHandler<HTMLDivElement> = (e): void => {
    const filter = (e.target as HTMLButtonElement).id;

    if (filter && filter !== activeFilter) {
      dispatch(FilterActionCreators.changeFilter(filter));
    }
  };

  const filteredTodos = React.useMemo<ITodo[]>(() => {
    switch (activeFilter) {
      case "active":
        return todos.filter((todo) => !todo.isCompleted);

      case "completed":
        return todos.filter((todo) => todo.isCompleted);

      default:
        return todos;
    }
  }, [todos, activeFilter]);

  const completedTodos = React.useMemo<string[]>(() => {
    return todos.filter((todo) => todo.isCompleted).map((task) => task.id);
  }, [activeFilter, todos]);

  const clearCompletedTodos = (): void => {
    dispatch(TodoActionCreators.clearComletedTodos(completedTodos));
  };

  return (
    <div className="todo-wrapper">
      <TodoInput
        value={title}
        onChange={handleChange}
        onKeyPress={handleKeyDown}
        onClick={handleClick}
      />

      <TodoList
        todos={filteredTodos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        activeFilter={activeFilter}
        changeFilter={changeFilter}
        clearCompletedTodos={clearCompletedTodos}
      />
    </div>
  );
};

export default Todo;
