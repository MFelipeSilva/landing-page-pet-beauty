import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 15px 75px;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-size: 24px;
    font-weight: 700;
  }

  ul {
    display: flex;
    gap: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > li {
      list-style: none;
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

export const Navbar = () => {
  return (
    <Container>
      <span>Pet Beauty</span>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </Container>
  );
};
