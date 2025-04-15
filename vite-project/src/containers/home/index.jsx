import { Nav } from "./styles";
import { ContainerNav } from "./styles";
import { NavButton } from "./styles";
import { Svg } from "./styles";
import { Rect } from "./styles";
import { Title } from "./styles";
import { SmallerTitle } from "./styles";
import { SubTitle } from "./styles";
import { Text } from "./styles";
import { IntroSection } from "./styles";
import { ScreenHalf } from "./styles";
import { ImgHalf } from "./styles";
import { SectionText } from "./styles";
import HomeCasaC from "./img/casacultura.png";

function Home() {
  return (
    <div>
      <SectionText>
        <Title>Centro Cultural</Title>
        <SubTitle>Ludmila Amalia Batova Arambasic</SubTitle>
      </SectionText>
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
              height="49"
              fill="transparent"
              strokeWidth="5"
            ></Rect>
          </Svg>
        </ContainerNav>
      </Nav>
      <IntroSection>
        <ScreenHalf>
          <SmallerTitle>
            Bem-vindo ao site do Centro Cultural de Lídice
          </SmallerTitle>
          <Text>
            O Centro Cultura de Lídice é um espaço dedicado à preservação da
            memória e promoção da cultura local. Aqui, você encontra exposições
            sobre a história do distrito, uma biblioteca pública distrital e
            diversas atividades culturais e sociais oferecidas à comunidade.
          </Text>
        </ScreenHalf>
        <ImgHalf>
          <img src={HomeCasaC} />
        </ImgHalf>
      </IntroSection>
    </div>
  );
}

export default Home;
