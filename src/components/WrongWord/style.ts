import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Level = styled.div`
  display: flex;
  span {
    padding: 5px;
    margin: 6px;
    background-color: rgb(252, 252, 252);
    border: 1px solid lightgray;
    border-radius: 7px;
    &:hover {
      cursor: pointer;
      filter: brightness(97%);
    }
  }
`;
