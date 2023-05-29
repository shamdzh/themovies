import React, { FC, useMemo, useState } from "react";
import { StyledContainer, StyledDate, StyledName } from "./styles";
import { Vote } from "./ui/Vote";
import { TDataMoviesListItemDto } from "../../../services/api/useMoviesApi";
import { MovieModal } from "./ui/MovieModal";

export const MovieCard: FC<TDataMoviesListItemDto> = ({
  id,
  title,
  poster_path,
  release_date,
  vote_average,
}) => {
  const yearFromDate = useMemo(
    () => release_date && release_date.substring(0, 4),
    [release_date]
  );

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyledContainer onClick={toggleModal}>
        <Vote vote={vote_average} />
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        <StyledName>{title}</StyledName>
        <StyledDate>{yearFromDate}</StyledDate>
      </StyledContainer>

      <MovieModal
        movieId={id}
        isOpen={isOpen}
        toggleModal={toggleModal}
        title={title}
        vote={vote_average}
        posterPath={poster_path}
        relaseDate={release_date}
      />
    </>
  );
};
