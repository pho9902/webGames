import styled from "styled-components";

export const Wrap = styled.div`
  border: 1px solid;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Record = styled.span`
  margin: 5px;
  padding: 2px;
  border-radius: 6px;
`;

export const RecordDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 6px;
  width: 250px;
`;

export const RuleDiv = styled.div`
  display: flex;
  flex-direction: column;
  * {
    margin: 2px;
  }
`;
