import styled from "styled-components";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

const Container = styled.main`
  display: flex;
  width: 100%;
<<<<<<< HEAD
  height: 100%;
  flex-direction: column;
=======
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
>>>>>>> f69ccf7 (feat: changes in home page)
`;

function App() {
  return (
    <Container id="/">
      <Home />
      <About />
      <Services />
      <Contact />
    </Container>
  );
}
export default App;
