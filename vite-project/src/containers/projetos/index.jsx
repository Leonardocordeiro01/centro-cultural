import Navbar from "../../components/Navbar";
import { SubTitle, SmallerTitle } from "../home/styles";
import { DivInitial } from "./stylesprojetos";
import { DivImagem } from "./stylesprojetos";
import { DivBackimg } from "./stylesprojetos";
import { PeliculaEscura } from "./stylesprojetos";
import { Text } from "./stylesprojetos";
import { SmallerTitleP } from "./stylesprojetos";
import { ScreenHalf } from "./stylesprojetos";

function Projetos() {
  return (
    <div>
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
            <SmallerTitleP>Oficinas do CRAS</SmallerTitleP>
            <Text>ginástica, ritmos e coral da 3ª idade</Text>
          </ScreenHalf>
        </DivImagem>
      </DivBackimg>
    </div>
  );
}

export default Projetos;
