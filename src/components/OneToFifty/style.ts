import styled from "styled-components";

interface Props {
  isBig: boolean;
}

export const Wrap = styled.div`
  width: 600px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CellContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border: 1px solid;
  width: 80px;
  height: 80px;
  background: ${props =>
    props.isBig ? "rgb(255, 255, 255)" : "rgb(248, 248, 248)"};
  cursor: pointer;
  &:hover {
    filter: brightness(97%);
  }
`;

export const Body = styled.div`
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export const H2 = styled.h2`
  font-size: 30px;
  color: black;
`;

export const Btn = styled.button`
  background: white;

  color: red;
`;

export const TimerContainer = styled.div`
  border: 1px solid;
  padding: 15px;
`;

export const TimerSpan = styled.span`
  color: blue;
  border: 1px lightgray;
  padding: 8px;
  margin: 12px;
  font-size: 20px;
`;
