import styled from "styled-components";

export const StyledRollButton = styled.button`
  display: inline-block;
  padding: 18px 60px;
  border-radius: 50em;
  position: relative;
  z-index: 2;
  will-change: transform, filter;
  background: linear-gradient(to right, #52a0fd 0%, #00e2fa 80%, #00e2fa 100%);
  color: white;
  font-size: 3rem;
`;
export const StyledRollWrapper = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
