import styled from "styled-components";

export const CommonOutLineBtn = styled.button<{
  border?: string;
}>`
  padding: 5px;
  margin: 6px;
  background-color: rgb(252, 252, 252);
  border: 1px solid ${props => (!props.border ? "lightgray" : props.border)};
  border-radius: 7px;
  &:hover {
    cursor: pointer;
    filter: brightness(97%);
  }
`;
