import { Title } from "./styles";
import { SmallerTitle } from "./styles";
import { SubTitle } from "./styles";
import { Text } from "./styles";
import { IntroSection } from "./styles";
import { ScreenHalf } from "./styles";
import { ImgHalf } from "./styles";
import { Sectionflag } from "./styles";
import { SectionText } from "./styles";
import HomeCasaC from "./img/casacultura.png";
import Fenix from "./img/ChatGPT Image Apr 21, 2025, 11_35_34 AM (1).png";
// import { DivImgFenix } from "./styles";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useEffect } from "react";
import Aos from "aos";
import { DivInitial } from "./styles";

import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Navbar />
      <Sectionflag>
        <Title>Centro Cultural</Title>
        <SubTitle>Ludmila Amalia Batova Arambasic</SubTitle>
      </Sectionflag>
      
      <IntroSection>
        <ScreenHalf data-aos="fade-left">
          <SmallerTitle>
            Bem-vindo ao site do Centro Cultural de Lídice
          </SmallerTitle>
          <Text>
            A Casa da Cultura de Lídice, em Rio Claro, RJ, foi construída no
            final do século XVIII, inicialmente como sede da prefeitura.
            Tornou-se Casa da Cultura em 1990. O Centro Cultural de Lídice é um
            espaço dedicado à preservação da memória e promoção da cultura
            local. Aqui, você encontra exposições sobre a história do distrito,
            uma biblioteca pública distrital e diversas atividades culturais e
            sociais oferecidas à comunidade.
          </Text>
        </ScreenHalf>
        <ImgHalf>
          <img src={HomeCasaC} />
        </ImgHalf>
      </IntroSection>
      <SectionText>
        <ImgHalf>
          <img src={Fenix} />
        </ImgHalf>

        <ScreenHalf data-aos="fade-right">
          <h1>História de Lídice</h1>
          <Text>
            Originalmente chamada Santo Antônio do Capivari, a localidade foi
            rebatizada como Lídice em 1944, em homenagem à vila tcheca de mesmo
            nome que foi destruída pelos nazistas durante a Segunda Guerra
            Mundial. Esse gesto simbólico foi adotado por diversos países
            aliados, incluindo o Brasil, para manter viva a memória da tragédia
            e homenagear as vítimas.
          </Text>
          <Text>
            Na praça central de Lídice, há uma estátua da Fênix, simbolizando o
            renascimento e a resistência diante da destruição. O distrito também
            abriga o Colégio Estadual Presidente Benes, em homenagem a Edvard
            Beneš, presidente da Tchecoslováquia durante o período da guerra.
          </Text>
        </ScreenHalf>
      </SectionText>

      <DivInitial>
        <div>
          <SmallerTitle>Venha visitar o Centro Cultural</SmallerTitle>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {" "}
          <SubTitle>Endereço</SubTitle>
          <p>
            Rodovia Francisco Saturnino Braga, s/n° <br />
          </p>
          <p>
            Centro – Lídice, RJ <br />
          </p>
          <p>
            {" "}
            CEP: 27475-000 <br />
          </p>
          <SubTitle>Horário de Funcionamento</SubTitle>
          <p>
            {" "}
            Segunda a sexta-feira <br />
          </p>
          <p>
            {" "}
            8h às 12h | 13h às 17h <br />
          </p>
        </div>
      </DivInitial>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4098.448336865453!2d-44.19804922425647!3d-22.8353259793055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c3bdcea8cafe1%3A0x9722b04f5954be4c!2sCasa%20da%20Cultura!5e1!3m2!1spt-BR!2sbr!4v1745259454000!5m2!1spt-BR!2sbr"
        width="100%"
        height="170"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </div>
  );
}

export default Home;
