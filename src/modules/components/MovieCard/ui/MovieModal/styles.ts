import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  width: 290px;
  height: 440px;
  gap: 8px;
  position: relative;
  border-radius: 8px;

  overflow: hidden;
  transition: all 0.6s;

  img {
    border-radius: 8px;
  }
`;

export const StyledName = styled.span`
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
`;

export const StyledText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
