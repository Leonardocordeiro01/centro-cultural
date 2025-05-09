import Navbar from "../components/Navbar";
import { SubTitle, SmallerTitle } from "../home/styles";
import { DivInitial } from "./stylesprojetos";
import { DivImagem } from "./stylesprojetos";
import { DivImagem2 } from "./stylesprojetos";
import { DivImagem3 } from "./stylesprojetos";
import { DivBackimg } from "./stylesprojetos";
import { PeliculaEscura } from "./stylesprojetos";
import { Text } from "./stylesprojetos";
import { SmallerTitleP } from "./stylesprojetos";
import { ScreenHalf } from "./stylesprojetos";
import Footer from "../components/footer";
import { DivBackgrondImg } from "./stylesprojetos";

function Projetos() {
  return (
    <div style={{ position: "relative" }}>
      <DivBackgrondImg />
      <Navbar />
      <DivInitial>
        <SmallerTitle>Conheça nossas atividades e projetos</SmallerTitle>
        <SubTitle>
          A Casa da Cultura de Lídice promove ações contínuas e projetos
          voltados à valorização da cultura e à integração comunitária. Entre os
          projetos desenvolvidos estão:
        </SubTitle>
      </DivInitial>
      <DivBackimg>
        <DivImagem>
          <PeliculaEscura />
          <ScreenHalf>
            <SmallerTitleP className="hide-text">
              Oficinas do CRAS
            </SmallerTitleP>
            <Text className="hide-text">
              ginástica, ritmos e coral da 3ª idade
            </Text>
          </ScreenHalf>
        </DivImagem>
      </DivBackimg>
      <DivBackimg>
        <DivImagem2>
          <PeliculaEscura />
          <ScreenHalf>
            <SmallerTitleP className="hide-text">
              Oficinas do CRAS
            </SmallerTitleP>
            <Text className="hide-text">
              ginástica, ritmos e coral da 3ª idade
            </Text>
          </ScreenHalf>
        </DivImagem2>
      </DivBackimg>
      <DivBackimg>
        <DivImagem3>
          <PeliculaEscura />
          <ScreenHalf>
            <SmallerTitleP className="hide-text">Aulas de teatro</SmallerTitleP>
          </ScreenHalf>
        </DivImagem3>
      </DivBackimg>
      <Footer />
    </div>
  );
}

export default Projetos;
