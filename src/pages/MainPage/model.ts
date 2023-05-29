import { useEffect, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useMoviesApi } from "../../services/api/useMoviesApi";
import { useQuery } from "@tanstack/react-query";

export const useLocalModel = () => {
  const history = useHistory();
  const location = useLocation();

  const { getMovies } = useMoviesApi();

  const searchParams = useMemo(
    () =>
      queryString.parse(location.search) as {
        genre: string;
        rating: string;
        year: string;
      },
    [location.search]
  );

  useEffect(() => {
    history.replace({
      pathname: "movies",
      search: "?" + queryString.stringify(searchParams),
    });
  }, []);

  const { data: moviesList, isLoading } = useQuery(
    ["movies-list", searchParams.genre, searchParams.rating, searchParams.year],
    () =>
      getMovies({
        ["with_genres"]: !!searchParams.genre
          ? Number(searchParams.genre)
          : undefined,
        ["primary_release_date.gte"]: !!searchParams.year
          ? searchParams.year
          : undefined,
        ["primary_release_date.lte"]: !!searchParams.year
          ? searchParams.year
          : undefined,
        "vote_average.lte": !!searchParams.rating
          ? Number(searchParams.rating)
          : undefined,
      }),
    {
      retry: 2,
      suspense: false,
      staleTime: 3000,
      cacheTime: 15000,
      keepPreviousData: false,
    }
  );

  return { moviesList, isLoading };
};
