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
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavButton>HOME</NavButton>
        </Link>
        <Link to="./projetos" style={{ textDecoration: "none" }}>
          <NavButton>PROJETOS</NavButton>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <NavButton>SOBRE NÓS</NavButton>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <NavButton>CONTATO</NavButton>
        </Link>

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
  );
}

export default Navbar;
