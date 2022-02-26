import styled from "styled-components";

interface Props {
  round: number;
}

function setWidth(round: number) {
  console.log(round);
  switch (round) {
    case 1:
      return "21px";
    case 2:
      return "19px";
    case 3:
      return "17px";
    case 4:
      return "15px";
    case 5:
      return "13px";
  }
}

export const EachTd = styled.td<Props>`
  border: 1px solid;
  border-radius: 6px;
  padding : ${props => setWidth(props.round)}
  font-size: ${props => setWidth(props.round)};
  background-color: white;
  &:hover {
    filter: brightness(97%);
    cursor: pointer;
  }
`;

export const WrapTable = styled.table`
  margin: 0 auto;
`;
