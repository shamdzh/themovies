import styled from "styled-components";

export const StyledInput = styled.input`
  width: 200px;
  height: 33px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  padding: 2px 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  :active,
  :hover,
  :focus {
    outline-color: #2684ff;
  }
`;
