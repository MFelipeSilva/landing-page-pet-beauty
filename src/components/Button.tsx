import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  width: max-content;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  font-size: clamp(16px, 3vw, 18px);
  font-weight: 600;
  padding: 18px 50px;
  border-radius: 20px;
  background-color: #3d348b;

  @media (max-width: 520px) {
    width: 100%;
    padding: 15px 50px;
  }
`;

export const Button = () => {
  return <StyledButton>Learn more</StyledButton>;
};