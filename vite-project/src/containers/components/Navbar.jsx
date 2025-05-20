import React, { useState } from "react";
import { Nav, ContainerNav, NavButton, Svg, Rect, Hamburger, MobileMenu } from "./NavbarStyle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <ContainerNav>
        <NavButton to="/">HOME</NavButton>
        <NavButton to="/projetos">PROJETOS</NavButton>
        <NavButton to="/faleconosco">CONTATO</NavButton>
        <NavButton to="/noticias">NOTÍCIAS</NavButton>

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
            height="60"
            fill="transparent"
            strokeWidth="5"
          ></Rect>
        </Svg>
        </ContainerNav>

      <Hamburger>
        <input
          type="checkbox"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <MobileMenu open={menuOpen}>
        <NavButton to="/" onClick={() => setMenuOpen(false)}>Início</NavButton>
        <NavButton to="/projetos" onClick={() => setMenuOpen(false)}>Projetos</NavButton>
        <NavButton to="/faleconosco" onClick={() => setMenuOpen(false)}>Contato</NavButton>
        <NavButton to="/noticias" onClick={() => setMenuOpen(false)}>Notícias</NavButton>
      </MobileMenu>
    </Nav>
  );
}

export default Navbar;
  