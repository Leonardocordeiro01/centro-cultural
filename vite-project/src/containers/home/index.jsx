import { Nav } from "./styles";
import { ContainerNav } from "./styles";
import { BntNav } from "./styles";
import { Svg } from "./styles";
import { Rect } from "./styles";
import { Title } from "./styles";
import { DivInicial } from "./styles";
import { MetadaDaTela } from "./styles";
import { SectionTexto } from "./styles";

function Home() {
  return (
    <div>
      <Nav>
        <ContainerNav>
          <BntNav>Home</BntNav>
          <BntNav>Contact</BntNav>
          <BntNav>About</BntNav>
          <BntNav>FAQ</BntNav>
          <Svg
            overflow="visible"
            width="400"
            height="60"
            viewBox="0 0 400 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Rect
              pathLength="100"
              x="0"
              y="0"
              width="400"
              hengt="60"
              fill="transparent"
              stroke-width="5"
            ></Rect>
          </Svg>
        </ContainerNav>
      </Nav>
      <DivInicial>
        <MetadaDaTela>
          <Title>Centro Cultural Ludmila Amalia Batova Arambasic</Title>
        </MetadaDaTela>
        <MetadaDaTela>
          <img
            src="C:\Users\leona\OneDrive\Documentos\GitHub\centro cultural\vite-project\public\logo casa da cultura.png"
            alt=""
          />
        </MetadaDaTela>
      </DivInicial>
    </div>
  );
}

export default Home;
