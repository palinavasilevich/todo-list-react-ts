import { ITodo } from "../../../types/types";

///store
export interface ITodoState {
  todos: ITodo[];
}

///actions
export enum TodoActionEnum {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
  CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS",
}

export interface IAddTodoAction {
  type: TodoActionEnum.ADD_TODO;
  payload: ITodo;
}

export interface IRemoveTodoAction {
  type: TodoActionEnum.REMOVE_TODO;
  payload: string;
}

export interface ICompleteTodo {
  type: TodoActionEnum.COMPLETE_TODO;
  payload: string;
}

export interface IClearCompletedTodos {
  type: TodoActionEnum.CLEAR_COMPLETED_TODOS;
  payload: string[];
}

export type TodoActionTypes =
  | IAddTodoAction
  | IRemoveTodoAction
  | ICompleteTodo
  | IClearCompletedTodos;
