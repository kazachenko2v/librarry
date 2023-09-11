import React from "react";
import { Input } from "antd";
import { SearchProps } from "../types";

const Search: React.FC<SearchProps> = ({ action }) => {
  const [value, setValue] = React.useState("");
  const onSearch = (value: string) => {
    action(value);
  };

  return (
    <Input.Search
      className="col-span-full"
      placeholder="Search..."
      onSearch={() => onSearch(value)}
      onChange={(e) => setValue(e.target.value)}
      allowClear
    />
  );
};

export default Search;
