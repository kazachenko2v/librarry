import React from "react";
import { SortProps } from "../types";
import { Select } from "antd";

const Sort: React.FC<SortProps> = ({
  label,
  action,
  defaultValue,
  options,
}) => {
  const handleChange = (value: string) => {
    action(value);
  };

  return (
    <label className="col-span-2">
      {label}{" "}
      <Select
        defaultValue={defaultValue}
        style={{ width: 120 }}
        onChange={handleChange}
        options={options}
      />
    </label>
  );
};

export default Sort;
