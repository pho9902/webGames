import styled from "styled-components";

interface Props {
  len: number;
}

export const Tr = styled.div`
  display: flex;
`;

export const Cell = styled.div`
  border: 1px solid;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Board = styled.div`
  padding: 100px;
`;

export const Numbers = styled.span<Props>`
  font-size: ${props => (props.len > 3 ? "20px" : "25px")};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
