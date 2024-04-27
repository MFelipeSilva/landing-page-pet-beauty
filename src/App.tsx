import styled from "styled-components";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
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
