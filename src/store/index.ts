import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { save } from "redux-localstorage-simple";

export const store = createStore(
  rootReducer,
  applyMiddleware(save({ namespace: "todo-list" }))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
