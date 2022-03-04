import styled from "styled-components";

interface Props {
  num: number;
}

function setColor(num: number) {
  switch (num) {
    case 2:
      return "#eee4da;";

    case 4:
      return "#eee1c9;";
    case 8:
      return "#f3b27a;";
    case 16:
      return "#f69664;";
    case 32:
      return "#f77c5f;";
    case 64:
      return "#f75f3b;";
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
      return "#edd073;";
  }
}

export const Tr = styled.div`
  display: flex;
`;

export const Cell = styled.div<Props>`
  border: 1px solid;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => setColor(props.num)};
  box-shadow: ${props =>
    props.num >= 1024 ? "0px 0px 20px #edd073;" : "none"};
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Board = styled.div`
  padding: 100px;
  margin: 0 auto;
`;

export const Numbers = styled.span<Props>`
  font-size: ${props => (props.num.toString().length > 3 ? "20px" : "25px")};
  color: ${props => (+props.num > 5 ? "white;" : "black;")};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
