import type { FC } from 'react';
import React, { useLayoutEffect } from 'react';


import { StyledContent, StyledWrapper } from './styles';

type Props = {
  children: JSX.Element,
};


export const Layout: FC<Props> = ({children}) => {

  return (
    <StyledWrapper>
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  );
};

