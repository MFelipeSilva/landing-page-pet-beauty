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
      list-style: none;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      & > li > a {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
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
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <IconMenu />
      </nav>
    </Container>
  );
};
