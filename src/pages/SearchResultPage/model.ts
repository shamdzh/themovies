import { useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useMoviesApi } from "../../services/api/useMoviesApi";
import { useQuery } from "@tanstack/react-query";

export const useLocalModel = () => {
  const history = useHistory();
  const location = useLocation();

  const { searchMovies } = useMoviesApi();

  const searchParams = useMemo(
    () =>
      queryString.parse(location.search) as {
        query: string;
      },
    [location.search]
  );

  useEffect(() => {
    history.replace({
      pathname: "search",
      search: "?" + queryString.stringify(searchParams),
    });
  }, []);

  const { data: moviesList, isLoading } = useQuery(
    ["movies-list", searchParams.query],
    () => searchMovies(searchParams.query),
    {
      retry: 2,
      suspense: false,
      staleTime: 3000,
      cacheTime: 15000,
      keepPreviousData: false,
    }
  );

  return { moviesList, isLoading, searchParams };
};
