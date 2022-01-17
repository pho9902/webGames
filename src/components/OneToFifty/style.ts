import styled from "styled-components";

export const Wrap = styled.div`
  width: 600px;
  height: 800px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CellContainer = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const Body = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;
