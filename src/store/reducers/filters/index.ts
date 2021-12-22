import { FilterActionEnum, FilterActionTypes, FilterState } from "./types";
import { load } from "redux-localstorage-simple";

const savedFilter: any = load({ namespace: "todo-list" });

const initialState: FilterState = {
  activeFilter:
    savedFilter.filters && savedFilter.filters.activeFilter
      ? savedFilter.filters.activeFilter
      : "all",
};

export default function FilterReducers(
  state = initialState,
  action: FilterActionTypes
): FilterState {
  switch (action.type) {
    case FilterActionEnum.CHANGE_FILTER:
      return { ...state, activeFilter: action.payload };

    default:
      return state;
  }
}
