import styled from "styled-components";

export const EachTd = styled.td`
  border: 1px solid;
  border-radius: 6px;
  padding: 13px;
  font-size: large;
  background-color: white;
  &:hover {
    filter: brightness(97%);
    cursor: pointer;
  }
`;

export const WrapTable = styled.table`
  margin: 0 auto;
`;
