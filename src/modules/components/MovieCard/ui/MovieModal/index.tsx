import React, { FC, useMemo, useState } from "react";
import { StyledModal } from "../../styles";
import { useMoviesApi } from "../../../../../services/api/useMoviesApi";
import { useQuery } from "@tanstack/react-query";
import { Vote } from "../Vote";
import { StyledName, StyledText, StyledWrapper } from "./styles";

type Props = {
  isOpen: boolean;
  toggleModal: () => void;
  movieId: number;
  title: string;
  posterPath: string;
  vote: number;
  relaseDate: string;
};

export const MovieModal: FC<Props> = ({ isOpen, toggleModal, movieId }) => {
  const { getMovieDetails } = useMoviesApi();

  const { data, isLoading } = useQuery(
    ["movies-details", movieId],
    () => getMovieDetails(movieId),
    {
      retry: 2,
      suspense: false,
      staleTime: 3000,
      cacheTime: 15000,
      keepPreviousData: false,
    }
  );

  const yearFromDate = useMemo(
    () => data?.release_date && data?.release_date.substring(0, 4),
    [data?.release_date]
  );

  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <StyledWrapper>
          <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />
          <Vote vote={data?.vote_average ?? 0} />
        </StyledWrapper>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginLeft: "24px",
            maxWidth: "50%",
          }}
        >
          <StyledName>{data?.title}</StyledName>
          <StyledText>
            {data?.genres.map((genre) => genre.name).join(", ")}
          </StyledText>
          <div style={{ display: "flex", gap: "40px" }}>
            <StyledText>{yearFromDate}</StyledText>
            {data?.runtime && <StyledText>{data?.runtime} мин.</StyledText>}
          </div>
          <StyledText>{data?.tagline}</StyledText>
          <StyledText>{data?.overview}</StyledText>
        </div>
      </StyledModal>
    </>
  );
};
