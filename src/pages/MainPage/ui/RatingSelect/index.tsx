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

export const RatingSelect = () => {
  const ratingValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const options = ratingValues?.map((item) => ({
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
        "?" + queryString.stringify({ ...searchParams, rating: option?.value }),
    });
  };

  return (
    <Select
      name="rating"
      placeholder={"Рейтинг"}
      isClearable
      options={options}
      onChange={onChangeHandler}
      styles={{
        control: (provided) => ({ ...provided, width: "200px" }),
      }}
    />
  );
};
