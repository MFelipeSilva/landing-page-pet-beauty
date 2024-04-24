import styled from "styled-components";

import { Button } from "../../components/Button";

import about_image from "../../assets/about-image.png";

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: flex;
    max-width: 1728px;
    width: 90vw;
    align-items: center;
    justify-content: space-around;

    & > img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;

      @media (max-width: 1440px) {
        width: 50%;
        height: 50%;
      }

      @media (max-width: 768px) {
        width: 90%;
        height: 90%;
      }
    }

    div {
      display: flex;
      gap: 40px;
      max-width: 590px;
      flex-direction: column;
      align-items: flex-start;

      h2 {
        color: #000;
        font-size: clamp(40px, 3vw, 50px);
        font-weight: 900;

        span {
          color: #ff8800;
        }
      }

      p {
        font-size: clamp(20px, 1.5vw, 24px);
        font-weight: 500;
      }

      @media (max-width: 768px) {
        gap: 30px;
        width: 90%;
        height: 90%;
      }
    }

    @media (max-width: 768px) {
      gap: 30px;
      flex-direction: column-reverse;
    }
  }
`;

function About() {
  return (
    <Container>
      <div>
        <img src={about_image} alt="image of a cat" />
        <div>
          <h2>
            We are a pet shop that will offer the <span>best care</span> for
            your pet.
          </h2>
          <p>
            With +15 years of experience and service we give you the guarantee
            that your pet will have the best treatments and care, in our store
            we have the best products for them, quality feed, toys, accessories
            and medicines.
          </p>
          <Button>Book with us</Button>
        </div>
      </div>
    </Container>
  );
}
export default About;
