import React from "react";
import { StyledContainer, Title } from "./styles";
import { useLocalModel } from "./model";
import { Search } from "../../modules/components/Search";
import { MovieCard } from "../../modules/components/MovieCard";

export const SearchResult = () => {
  const { moviesList, isLoading, searchParams } = useLocalModel();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Title>Результаты поиска по запросу: {searchParams.query}</Title>
      <StyledContainer>
        <Search />
      </StyledContainer>

      <StyledContainer style={{ flexWrap: "wrap" }}>
        {moviesList?.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        ))}
      </StyledContainer>
    </div>
  );
};
