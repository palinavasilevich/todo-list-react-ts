import { FilterActionEnum } from "./types";

export const FilterActionCreators = {
  changeFilter: (filter: string) => ({
    type: FilterActionEnum.CHANGE_FILTER,
    payload: filter,
  }),
};
