import { Nav } from "./styles";
import { ContainerNav } from "./styles";
import { NavButton } from "./styles";
import { Svg } from "./styles";
import { Rect } from "./styles";
import { Title } from "./styles";
import { SubTitle } from "./styles";
import { IntroSection } from "./styles";
import { ScreenHalf } from "./styles";
import { SectionTexto } from "./styles";

function Home() {
  return (
    <div>
      <SectionTexto>
        <Title>Centro Cultural</Title>
        <SubTitle>Ludmila Amalia Batova Arambasic</SubTitle>
      </SectionTexto>
      <Nav>
        <ContainerNav>
          <NavButton>HOME</NavButton>
          <NavButton>PROJETOS</NavButton>
          <NavButton>SOBRE NÓS</NavButton>
          <NavButton>CONTATO</NavButton>
          <Svg
            overflow="visible"
            width="100%"
            height="60"
            viewBox="0 0 470 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Rect
              pathLength="100"
              x="0"
              y="0"
              width="470"
              height="60"
              fill="transparent"
              strokeWidth="5"
            ></Rect>
          </Svg>
        </ContainerNav>
      </Nav>
      <IntroSection>
        <ScreenHalf>
          <Title>Centro Cultural Ludmila Amalia Batova Arambasic</Title>
        </ScreenHalf>
        <ScreenHalf>
          <img
            src="C:\Users\leona\OneDrive\Documentos\GitHub\centro cultural\vite-project\public\logo casa da cultura.png"
            alt=""
          />
        </ScreenHalf>
      </IntroSection>
    </div>
  );
}

export default Home;
