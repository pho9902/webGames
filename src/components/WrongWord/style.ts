import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export const Level = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
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

export const Rule = styled.div`
  margin-left: 15px;
`;
