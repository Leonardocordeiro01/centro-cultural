import {
  FooterContainer,
  FooterSection,
  FooterTitle,
  FooterLink,
  FooterInfoText,
  FooterWrapper,
} from "./footerStyle";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <FooterContainer data-aos="fade-up" data-aos-duration="1000">
      <FooterWrapper>
        <FooterSection>
          <FooterTitle>Páginas</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/projetos">Projetos</FooterLink>
          <FooterLink to="/faleconosco">Contato</FooterLink>
          <FooterLink to="/noticias">Notícias</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterInfoText>Centro Cultural de Lídice</FooterInfoText>
          <FooterInfoText>
            Rodovia Francisco Saturnino Braga, s/n°
            <br />
            Lídice - RJ | CEP: 27475-000
          </FooterInfoText>
          <FooterInfoText>
            Tel: (24) 3332-1710 / 3332-1212 / 3332-1296
          </FooterInfoText>
          <FooterInfoText>Ramal 424</FooterInfoText>
          <FooterInfoText>
            Email: centroculturaldelidice@gmail.com
          </FooterInfoText>
          <FooterInfoText>Horário: 8h-12h / 13h-17h (Seg a Sex)</FooterInfoText>
        </FooterSection>
      </FooterWrapper>
      <FooterInfoText style={{ textAlign: "center", marginTop: "2em" }}>
        &copy; 2025 Casa da Cultura de Lídice. Todos os direitos reservados.
      </FooterInfoText>
    </FooterContainer>
  );
}

export default Footer;
