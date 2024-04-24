import styled from "styled-components";

import { IconMenu } from "./icons";

const Container = styled.header`
  display: flex;
  width: 100%;
  height: 5.5em;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;

  nav {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;

    & > span {
      color: #fff;
      font-size: 36px;
      font-weight: 700;
    }

    ul {
      display: flex;
      gap: 30px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      & > li {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        list-style: none;
      }
    }

    & > svg {
      display: none;
      color: #fff;
    }

    @media (max-width: 768px) {
      ul {
        display: none;
      }

      & > svg {
        display: flex;
      }
    }
  }
`;
export const Navbar = () => {
  return (
    <Container>
      <nav>
        <span>Pet Beauty</span>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <IconMenu />
      </nav>
    </Container>
  );
};
