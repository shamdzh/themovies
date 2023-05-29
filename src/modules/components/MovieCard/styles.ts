import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 415px;
  gap: 8px;
  position: relative;
  border-radius: 8px;

  overflow: hidden;

  img {
    border-radius: 8px;
  }
`;

export const StyledName = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

export const StyledDate = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const StyledModal = Modal.styled`
width: 800px;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
border-radius: 8px;
padding: 40px;
`;
