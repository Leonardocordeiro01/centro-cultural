import { Nav } from "./styles";
import { ContainerNav } from "./styles";
import { BntNav } from "./styles";
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
