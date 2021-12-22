import { ITodoState, TodoActionEnum, TodoActionTypes } from "./types";
import { load } from "redux-localstorage-simple";

const savedTodos: any = load({ namespace: "todo-list" });

const initialState: ITodoState = {
  todos: savedTodos.tasks.todos || [],
};

export default function tasksReducer(
  state = initialState,
  action: TodoActionTypes
): ITodoState {
  switch (action.type) {
    case TodoActionEnum.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case TodoActionEnum.REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos].filter((todo) => todo.id !== action.payload),
      };

    case TodoActionEnum.COMPLETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id !== action.payload) return todo;

            return { ...todo, isCompleted: !todo.isCompleted };
          }),
        ],
      };

    case TodoActionEnum.CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => !action.payload.includes(todo.id)),
        ],
      };
    default:
      return state;
  }
}
