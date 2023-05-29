import React, { useMemo } from "react";
import Select, { ActionMeta } from "react-select";
import { useMoviesApi } from "../../../../services/api/useMoviesApi";
import { useQuery } from "@tanstack/react-query";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

type TOption = {
  label: string;
  value: number;
};

export const YearSelect = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1960;

  const yearsArray = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const options = yearsArray?.map((item) => ({
    value: item,
    label: `${item}`,
  }));

  const location = useLocation();
  const history = useHistory();

  const searchParams = useMemo(
    () => queryString.parse(location.search),
    [location.search]
  );

  const onChangeHandler = (option: TOption | null) => {
    history.replace({
      ...location,
      search:
        "?" + queryString.stringify({ ...searchParams, year: option?.value }),
    });
  };

  return (
    <Select
      name="year"
      placeholder={"Год"}
      options={options}
      isClearable
      onChange={onChangeHandler}
      styles={{
        control: (provided) => ({ ...provided, width: "200px" }),
      }}
    />
  );
};
