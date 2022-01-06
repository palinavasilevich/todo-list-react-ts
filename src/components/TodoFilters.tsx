import React, { FC } from "react";
import cn from "classnames";

interface TodoFiltersProps {
  countItems: number;
  activeFilter: string;
  changeFilter: (e: React.MouseEvent<HTMLDivElement>) => void;
  clearCompletedTodos: () => void;
}

type IFilter = {
  id: string;
  label: string;
};

const TodoFilters: FC<TodoFiltersProps> = (props) => {
  const { countItems, activeFilter, changeFilter, clearCompletedTodos } = props;

  const filters: IFilter[] = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ];

  console.warn("TodoFilters");

  return (
    <div className="todo-card todo-filters">
      <p>
        <span>{countItems}</span> items left
      </p>
      <div className={cn("todo-filters__container", {})} onClick={changeFilter}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            id={filter.id}
            className={cn({ active: filter.id === activeFilter })}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="todo-filters__btn">
        <button id="clear-completed" onClick={clearCompletedTodos}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoFilters);
