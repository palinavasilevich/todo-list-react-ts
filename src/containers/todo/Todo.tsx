import React, { FC, ReactEventHandler, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoInput from "../../components/todo-input/TodoInput";
import TodoList from "../../components/TodoList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

import { TodoActionCreators } from "../../store/reducers/tasks/action-creators";
import { FilterActionCreators } from "../../store/reducers/filters/action-creators";

import { getFilteredTodos } from "../../store/selectors";

const Todo: FC = () => {
  const [title, setTitle] = useState("");

  const { activeFilter } = useTypedSelector((state) => state.filters);

  const filteredTodos = useTypedSelector(getFilteredTodos);

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

  const removeTodo = useCallback((id: string): void => {
    dispatch(TodoActionCreators.removeTodo(id));
  }, []);

  const completeTodo = useCallback((id: string): void => {
    dispatch(TodoActionCreators.completeTodo(id));
  }, []);

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

  const changeFilter: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (e): void => {
      const filter = (e.target as HTMLButtonElement).id;

      if (filter && filter !== activeFilter) {
        dispatch(FilterActionCreators.changeFilter(filter));
      }
    },
    [activeFilter]
  );

  const clearCompletedTodos = useCallback((): void => {
    dispatch(TodoActionCreators.clearComletedTodos());
  }, []);

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
