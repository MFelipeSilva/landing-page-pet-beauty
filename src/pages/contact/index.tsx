import styled from "styled-components";

import { Form } from "../../components/Form";

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 80px;
  padding: 10em 0;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    max-width: 1720.8px;
    width: 90vw;

    gap: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    div {
      display: flex;
      max-width: 635px;
      width: 100%;
      gap: 50px;
      align-items: self-start;
      flex-direction: column;
      justify-content: center;

      div {
        display: flex;
        gap: 40px;

        & > h2 {
          color: #000;
          font-size: clamp(40px, 3vw, 50px);
          font-weight: 900;

          & > span {
            color: #3d348b;
          }
        }

        & > p {
          color: #000;
          font-size: clamp(20px, 1.5vw, 24px);
          font-weight: 500;
        }
      }

      & > iframe {
        width: 100%;
        height: 335.55px;
        border: none;
        outline: none;
        border-radius: 20px;
      }
    }

    @media (max-width: 1280px) {
      flex-direction: column-reverse;

      form {
        max-width: none;
      }

      div {
        max-width: none;
      }
    }

    @media (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

function Contact() {
  return (
    <Container>
      <div>
        <Form />
        <div>
          <div>
            <h2>
              Are you <span>interested</span> or have a <span>question</span>?
              Contact us
            </h2>
            <p>
              Our physical store is located in that place of the map, visit it
              to receive your service.
            </p>
          </div>
          <iframe
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.89462714197262!2d-86.7785447079524!3d33.51921998814268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891bb3cdcbf95d%3A0x2a27f9dddaa4dc9!2sAvondale%20Animal%20Hospital!5e0!3m2!1spt-BR!2sbr!4v1714053704280!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Container>
  );
}
export default Contact;
