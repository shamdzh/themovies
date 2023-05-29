import React, { FC } from "react";
import { StyledBox } from "./styles";

type Props = {
  vote: number;
};

export const Vote: FC<Props> = ({ vote }) => {
  return <StyledBox>{vote}</StyledBox>;
};
