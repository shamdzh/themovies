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

export const GenreSelect = () => {
  const { getMovieGenresList } = useMoviesApi();
  const { data } = useQuery(["movie-genres"], () => getMovieGenresList(), {
    retry: 2,
    suspense: false,
    staleTime: 3000,
    cacheTime: 15000,
    keepPreviousData: false,
  });

  const options = data?.genres.map((genre) => ({
    value: genre.id,
    label: genre.name,
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
        "?" + queryString.stringify({ ...searchParams, genre: option?.value }),
    });
  };

  return (
    <Select
      name="genre"
      placeholder={"Жанр"}
      isClearable
      options={options}
      onChange={onChangeHandler}
      styles={{
        control: (provided) => ({ ...provided, width: "200px" }),
      }}
    />
  );
};
