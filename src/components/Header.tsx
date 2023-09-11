import React from "react";
import { useActionCreators } from "../hooks/useActionCreactors";
import { filtersActions } from "../redux/filters/slice";
import { Search, Sort } from ".";
import { HeaderProps } from "../types";
import {
  CATEGORIES,
  DEFAULT_CATEGORIES_VALUE,
  DEFAULT_SORTED_VALUE,
  SORTED_BY,
} from "../constants";

const Header: React.FC<HeaderProps> = ({ booksCount }) => {
  const actions = useActionCreators(filtersActions);

  return (
    <header className="py-10 max-w-lg m-auto grid grid-cols-4 grid-rows-3 gap-y-5 gap-x-3">
      <Search action={actions.setSearchValue} />
      <Sort
        label={"Sorting by:"}
        action={actions.setOrderBy}
        defaultValue={DEFAULT_SORTED_VALUE}
        options={SORTED_BY}
      />
      <Sort
        label={"Categories:"}
        action={actions.setCategory}
        defaultValue={DEFAULT_CATEGORIES_VALUE}
        options={CATEGORIES}
      />
      <h1 className="col-span-full justify-self-center self-center text-xl font-semibold">
        Found {booksCount} results
      </h1>
    </header>
  );
};

export default Header;
