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
import { ButtonCnt } from "./stylesprojetos";

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
              Oficinas do CRAS – Ginástica
            </SmallerTitleP>
            <Text className="hide-text">
              A oficina de ginástica promovida pelo CRAS visa estimular a
              prática de atividades físicas regulares, contribuindo para a saúde
              física e mental dos participantes. Com exercícios leves e
              adaptados, a proposta busca melhorar o condicionamento, a
              mobilidade e o bem-estar geral, promovendo também momentos de
              socialização e incentivo à vida ativa.
            </Text>
            <ButtonCnt
              className="hide-text"
              href={`https://wa.me/${"55 24 3334-1121"}?text=${"Gostaria de saber mais sobre a ginastica do cras"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Botão do WhatsApp
            </ButtonCnt>
          </ScreenHalf>
        </DivImagem>
      </DivBackimg>
      <DivBackimg>
        <DivImagem2>
          <PeliculaEscura />
          <ScreenHalf>
            <SmallerTitleP className="hide-text">
              Oficinas do CRAS - Coral
            </SmallerTitleP>
            <Text className="hide-text">
              A oficina de coral oferece aos participantes a oportunidade de
              explorar a música por meio do canto coletivo. Com foco na harmonia
              vocal, respiração e expressão musical, a atividade fortalece a
              convivência em grupo, estimula a sensibilidade artística e promove
              momentos de lazer e aprendizado. É um espaço acolhedor onde vozes
              se unem para criar experiências sonoras significativas.
            </Text>
            <ButtonCnt
              className="hide-text"
              href={`https://wa.me/${"55243334-1121"}?text=${"Gostaria de saber mais sobre a Coral do cras"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Botão do WhatsApp
            </ButtonCnt>
          </ScreenHalf>
        </DivImagem2>
      </DivBackimg>
      <DivBackimg>
        <DivImagem3>
          <PeliculaEscura />
          <ScreenHalf>
            <SmallerTitleP className="hide-text">Aulas de teatro</SmallerTitleP>
            <Text className="hide-text">
              A oficina de teatro proporciona um espaço criativo para que os
              participantes desenvolvam expressão, autoestima e habilidades
              sociais. Por meio de dinâmicas teatrais e encenações, os
              envolvidos exploram diferentes formas de comunicação, trabalham em
              equipe e vivenciam o universo das artes cênicas, fortalecendo sua
              identidade e vínculo com a cultura local.
            </Text>
            <ButtonCnt
              className="hide-text"
              href={`https://wa.me/${"552499823-5748"}?text=${"Olá, gostaria de saber mais sobre as aulas de teatro"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Botão do WhatsApp
            </ButtonCnt>
          </ScreenHalf>
        </DivImagem3>
      </DivBackimg>
      <Footer />
    </div>
  );
}

export default Projetos;
