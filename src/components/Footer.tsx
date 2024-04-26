import styled from "styled-components";

import { IconFacebook, IconInstagram, IconTwitter } from "./icons";

import footer_banner from "../assets/footer-banner.png";

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 7em 0 3em 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url(${footer_banner});
  background-size: cover;

  & > div:nth-child(1) {
    display: flex;
    width: 90%;
    gap: 5em;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;

    & > span {
      color: #fff;
      font-size: 36px;
      font-weight: 700;
    }
    & > div {
      display: flex;
      gap: 5em 15em;
      flex-wrap: wrap;
      align-items: start;
      justify-content: start;

      ul {
        display: flex;
        gap: 30px;
        flex-direction: column;
        text-align: start;
        justify-content: center;

        & > h3 {
          color: #fff;
          text-transform: uppercase;
        }

        & > li {
          color: #fff;
          cursor: pointer;
          font-size: 18px;
          font-weight: 500;
          list-style: none;
        }
      }

      @media (max-width: 768px) {
        gap: 5em 10em;
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    width: 90vw;
    margin-top: 6em;
    align-items: self-end;
    justify-content: space-between;

    & > span {
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
    }

    & > div {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;

      svg {
        color: #fff;
        cursor: pointer;
      }
    }

    @media (max-width: 480px) {
      gap: 2em;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <span>Pet Beauty</span>
        <div>
          <ul>
            <h3>Pages</h3>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <ul>
            <h3>Legal</h3>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
          </ul>
          <ul>
            <h3>Social</h3>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div>
        <span>© 2024 Pet Beauty. All rights reserved.</span>
        <div>
          <IconTwitter /> <IconInstagram /> <IconFacebook />
        </div>
      </div>
    </StyledFooter>
  );
};
