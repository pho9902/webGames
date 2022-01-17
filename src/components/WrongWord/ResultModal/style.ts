import styled from "styled-components";

export const Wrap = styled.div`
  background: rgba(101, 101, 101, 0.9);
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 99999;
`;

export const Modal = styled.div`
  border-radius: 12px;
  background: white;
  width: 25vw;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
  padding: 20px, 20px, 0px, 20px;
`;

export const Button = styled.span``;
