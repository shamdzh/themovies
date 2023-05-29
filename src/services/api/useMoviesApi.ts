import axios, { AxiosResponse } from "axios";
import { getRequestOptions } from "./lib";

export type TMovieFilters = {
  ["with_genres"]?: number | undefined;
  ["vote_average.lte"]?: number | undefined;
  ["primary_release_date.gte"]?: string | undefined;
  ["primary_release_date.lte"]?: string | undefined;
};

export type TDataMoviesListItemDto = {
  id: number;
  title: string;
  ["poster_path"]: string;
  ["vote_average"]: number;
  ["release_date"]: string;
};

export type TDataMoviesList = {
  page: number;
  results: Array<TDataMoviesListItemDto>;
  ["total_pages"]: number;
  ["total_results"]: number;
  vote_average: number;
};

type TMovieDetailsDto = {
  title: string;
  overview: string;
  genres: Array<{ id: number; name: string }>;
  ["vote_average"]: number;
  ["poster_path"]: string;
  tagline: string;
  ["release_date"]: string;
  runtime: number;
};

type TMovieGenres = {
  genres: Array<{ id: number; name: string }>;
};

const getMovieGenresList = async (): Promise<TMovieGenres> => {
  const movieGenres: AxiosResponse<TMovieGenres> = await axios(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    getRequestOptions
  );

  return movieGenres.data;
};

const searchMovies = async (query?: string): Promise<TDataMoviesList> => {
  const moviesData: AxiosResponse<TDataMoviesList> = await axios(
    `https://api.themoviedb.org/3/search/movie?query=john&include_adult=false&language=en-US&page=1`,
    { ...getRequestOptions, params: { query } }
  );

  return moviesData.data;
};

const getMovies = async (filters?: TMovieFilters): Promise<TDataMoviesList> => {
  const moviesData: AxiosResponse<TDataMoviesList> = await axios(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`,
    { ...getRequestOptions, params: filters }
  );

  return moviesData.data;
};

const getMovieDetails = async (id: number) => {
  const movieDetailsData: AxiosResponse<TMovieDetailsDto> = await axios(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  );

  return movieDetailsData.data;
};

export const useMoviesApi = () => ({
  getMovies,
  getMovieDetails,
  getMovieGenresList,
  searchMovies,
});
