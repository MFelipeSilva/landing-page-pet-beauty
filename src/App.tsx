import styled from "styled-components";

import { Button } from "./components/Button";

import banner from "../src/assets/home-banner.png";

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-left: 5.1vw;
  align-items: center;
  justify-content: start;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;

  div {
    display: flex;
    max-width: 660px;
    width: 60%;
    gap: 30px;
    flex-direction: column;

    h1 {
      color: #fff;
      font-size: clamp(45px, 4vw, 65px);

      & > span {
        color: #3d348b;
      }
    }

    @media (max-width: 768px) {
      width: 70%;
    }

    @media (max-width: 520px) {
      width: 90%;
    }
  }

  @media (max-width: 1440px) {
    background-position: center;
  }

  @media (max-width: 520px) {
    padding-left: 0;
    justify-content: center;
  }
`;

function App() {
  return (
    <Container>
      <div>
        <h1>
          Our <span>specialists</span> in offering the best care for your pet.
        </h1>
        <Button>Learn more</Button>
      </div>
    </Container>
  );
}
export default App;
