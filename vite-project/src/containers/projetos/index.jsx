import Navbar from "../../components/Navbar";
import { IntroSection, Title } from "../home/styles"; // esse style esta vindo do home pois reutilizei ele
import {
  SubTitle,
  SmallerTitle,
  Text,
  ScreenHalf,
  ImgHalf,
} from "../home/styles";
import { DivInitial } from "./stylesprojetos";

function Projetos() {
  return (
    <div>
      <Navbar />
      <DivInitial>
        <Title>Conheça nossas atividades e projetos</Title>
        <SmallerTitle>
          A Casa da Cultura de Lídice promove ações contínuas e projetos
          voltados à valorização da cultura e à integração comunitária. Entre os
          projetos desenvolvidos estão:
        </SmallerTitle>
      </DivInitial>
      <IntroSection>
        <ScreenHalf>
          <SubTitle>Oficinas do CRAS</SubTitle>
          <Text> ginástica, ritmos e coral da 3ª idade</Text>
        </ScreenHalf>
        <ImgHalf>
          <img src="" />
        </ImgHalf>
      </IntroSection>
    </div>
  );
}

export default Projetos;
