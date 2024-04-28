import { ReactNode } from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  width: max-content;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  font-size: clamp(16px, 3vw, 18px);
  font-weight: 600;
  padding: 20px 50px;
  border-radius: 20px;
  background-color: #3d348b;
  transition: all 0.5s ease-out 0s;

  &:hover {
    background-color: #5146b0;
  }

  @media (max-width: 520px) {
    padding: 15px 50px;
  }
`;

interface IAboutProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
}

export const Button = ({ type, children }: IAboutProps) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};
