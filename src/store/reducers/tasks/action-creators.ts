import { ITodo } from "../../../types/types";
import {
  IAddTodoAction,
  IClearCompletedTodos,
  ICompleteTodo,
  IRemoveTodoAction,
  TodoActionEnum,
} from "./types";

export const TodoActionCreators = {
  addTodo: (todo: ITodo): IAddTodoAction => ({
    type: TodoActionEnum.ADD_TODO,
    payload: todo,
  }),

  removeTodo: (id: string): IRemoveTodoAction => ({
    type: TodoActionEnum.REMOVE_TODO,
    payload: id,
  }),

  completeTodo: (id: string): ICompleteTodo => ({
    type: TodoActionEnum.COMPLETE_TODO,
    payload: id,
  }),

  clearComletedTodos: (completedTodos: string[]): IClearCompletedTodos => ({
    type: TodoActionEnum.CLEAR_COMPLETED_TODOS,
    payload: completedTodos,
  }),
};
