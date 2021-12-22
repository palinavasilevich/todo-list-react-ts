export interface FilterState {
  activeFilter: string;
}

export enum FilterActionEnum {
  CHANGE_FILTER = "CHANGE_FILTER ",
}

export interface IChangeFilterAction {
  type: FilterActionEnum.CHANGE_FILTER;
  payload: string;
}

export type FilterActionTypes = IChangeFilterAction;
