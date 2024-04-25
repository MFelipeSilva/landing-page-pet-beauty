import styled from "styled-components";

import { services } from "../../utils/services";

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 80px;
  padding: 10em 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    color: #000;
    font-size: clamp(40px, 3vw, 50px);
    font-weight: 900;
  }

  & > div {
    display: flex;
    width: 70vw;
    gap: 80px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const Card = styled.div`
  display: flex;
  width: 340px;
  height: 380px;
  padding: 20px;
  border-radius: 0 0 50px 0;
  box-shadow: 1px 10px 15px 7px rgba(0, 0, 0, 10%);
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  div {
    display: flex;
    gap: 25px;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: center;

    & > h2 {
      color: #000;
      font-size: 20px;
      font-weight: 700;
    }

    & > p {
      color: #000;
      font-size: 18px;
      font-weight: 500;
    }
  }

  & > p {
    color: #3d348b;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  &:nth-of-type(2) > p {
    color: #ff8800;
  }
`;

function Services() {
  return (
    <Container>
      <h2>Our services</h2>
      <div>
        {services.map((service) => (
          <Card key={service.id}>
            <div>
              <img src={service.icon} alt="" />
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </div>
            <p>Learn more</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
export default Services;
