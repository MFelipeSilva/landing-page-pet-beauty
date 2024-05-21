import styled from "styled-components";

import { Button } from "../../components/Button";

import home_banner from "../../assets/home-banner.png";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20em 0;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-image: url(${home_banner});

  & > div {
    display: flex;
    width: 75vw;

    & > div {
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
    }

    @media (max-width: 992px) {
      width: 90vw;
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

function Home() {
  return (
    <Container>
      <div>
        <div>
          <h1>
            Our <span>specialists</span> in offering the best care for your pet.
          </h1>
          <Button>Learn more</Button>
        </div>
      </div>
    </Container>
  );
}
export default Home;
