import Navbar from "../../components/Navbar";
import { IntroSection } from "../home/styles"; // esse style esta vindo do home pois reutilizei ele
import { Title } from "../home/styles"; // esse style esta vindo do home pois reutilizei ele
import { SubTitle } from "../home/styles";

function Projetos() {
  return (
    <div>
      <Navbar />
      <IntroSection>
        <div>
          <Title>Conheça nossas atividades e projetos</Title>
          <SubTitle>
            A Casa da Cultura de Lídice promove ações contínuas e projetos
            voltados à valorização da cultura e à integração comunitária. Entre
            os projetos desenvolvidos estão:
          </SubTitle>
        </div>
      </IntroSection>
    </div>
  );
}

export default Projetos;
