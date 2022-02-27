import styled from "styled-components";

interface Props {
  round: number;
}

function setWidth(round: number) {
  switch (round) {
    case 1:
      return "100px;";
    case 2:
      return "100px;";
    case 3:
      return "50px;";
    case 4:
      return "40px;";
    case 5:
      return "25px;";
  }
}

export const EachTd = styled.td<Props>`
  border: 1px solid;
  border-radius: 6px;
  padding: 8px;
  font-size: ${props => setWidth(props.round)}
  background-color: white;
  &:hover {
    filter: brightness(95%);
    cursor: pointer;
  }
`;

export const WrapTable = styled.table`
  margin: 0 auto;
  margin-top: 15px;
`;
