import { useEffect, useState } from "react";

import styled from "styled-components";

import { IconClose, IconMenu } from "./icons";

import logo from "../assets/logo.png";

interface IHeaderProps {
  isOpen: boolean;
}

const StyledHeader = styled.header<IHeaderProps>`
  display: flex;
  width: 100%;
  height: 8em;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;

  nav {
    display: flex;
    width: 75vw;
    align-items: center;
    justify-content: space-between;

    & > img {
      max-width: 130px;
      max-height: 130px;
      object-fit: contain;
    }

    ul {
      display: flex;
      gap: 30px;
      list-style: none;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      & > li {
        height: 30px;

        a {
          color: #fff;
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
        }

        &:hover {
          border-bottom: 2px solid #fff;
        }
      }
    }

    & > button {
      display: none;
      z-index: 2;
      color: #fff;
      cursor: pointer;
      background: none;
    }

    @media (max-width: 992px) {
      width: 90vw;
    }

    @media (max-width: 768px) {
      ul {
        display: none;
      }

      & > button {
        display: flex;
      }
    }
  }

  div {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    transition: visibility 0.3s ease-in-out;

    & > aside {
      position: fixed;
      width: min(70%, 400px);
      height: 100%;
      padding: 20em 0;
      right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
      align-items: center;
      justify-content: center;
      background-color: #ff8800;
      border-radius: 15px 0 0 15px;
      visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
      transition: 0.3s ease-in-out;

      ul {
        display: flex;
        gap: 30px;
        list-style: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > li {
          height: 30px;

          a {
            color: #fff;
            font-size: 22px;
            font-weight: 500;
            text-decoration: none;
          }

          &:hover {
            border-bottom: 2px solid #fff;
          }
        }
      }

      @media (max-width: 768px) {
        & {
          display: flex;
        }
      }
    }

    @media (max-width: 768px) {
      & {
        display: flex;
      }
    }
  }
`;
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = () => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    toggleScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <StyledHeader isOpen={isOpen}>
      <nav>
        <img src={logo} alt="logo" />
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
        {isOpen ? (
          <button onClick={() => setIsOpen(!isOpen)}>
            <IconClose />
          </button>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <IconMenu />
          </button>
        )}
      </nav>
      <div onClick={() => setIsOpen(false)}>
        <aside>
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
        </aside>
      </div>
    </StyledHeader>
  );
};
