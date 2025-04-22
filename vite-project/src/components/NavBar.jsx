import { Nav } from "./Navbar";
import { ContainerNav } from "./Navbar";
import { NavButton } from "./Navbar";
import { Svg } from "./Navbar";
import { Rect } from "./Navbar";
function Navbar() {
  return (
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
  );
}

export default Navbar;
