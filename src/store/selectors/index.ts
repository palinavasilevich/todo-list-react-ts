import { createSelector } from "reselect";
import { RootState } from "..";
import { ITodo } from "../../types/types";

const selectActiveFilter = (state: RootState) => state.filters.activeFilter;
const selectTodos = (state: RootState) => state.tasks.todos;

export const getFilteredTodos = createSelector(
  [selectActiveFilter, selectTodos],
  (activeFilter: string, todos: ITodo[]) => {
    switch (activeFilter) {
      case "active":
        return todos.filter((todo) => !todo.isCompleted);

      case "completed":
        return todos.filter((todo) => todo.isCompleted);

      default:
        return todos;
    }
  }
);

export const getCompletedTodos = createSelector(
  [selectTodos],
  (todos: ITodo[]) => {
    return todos.filter((todo) => todo.isCompleted).map((task) => task.id);
  }
);
