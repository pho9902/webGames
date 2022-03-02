import styled from "styled-components";

export const Wrap = styled.div`
  margin: 0 auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px 0 50px;
  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
  padding: 0 50px;
  width: 300px;
`;

export const Title = styled.h2`
  margin-left: 50px;
  margin-bottom: 50px;
`;
