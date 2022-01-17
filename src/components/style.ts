import styled from "styled-components";

export const Wrap = styled.div`
  height: 100%;
`;

export const Body = styled.div`
  display: flex;
`;

export const GameTitles = styled.span`
  border: 1px solid red;
  padding: 8px;
  border-radius: 7px;
  margin: 10px;
  background-color: rgb(252, 252, 252);
  &:hover {
    filter: brightness(97%);
    cursor: pointer;
  }
`;
