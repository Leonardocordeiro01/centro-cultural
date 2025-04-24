import { Link } from "react-router-dom";
import { Nav } from "./NavbarStyle";
import { ContainerNav } from "./NavbarStyle";
import { NavButton } from "./NavbarStyle";
import { Svg } from "./NavbarStyle";
import { Rect } from "./NavbarStyle";

function Navbar() {
  return (
    <Nav>
      <ContainerNav>
        <NavButton to="/">HOME</NavButton>

        <NavButton to="/projetos">PROJETOS</NavButton>

        <NavButton to="/faleconosco">CONTATO</NavButton>

        <NavButton to="/noticias">NOTICIAS</NavButton>

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
    </Nav>
  );
}

export default Navbar;
