import styled from "styled-components";

export const Nav = styled.div`
  position: relative;
  width: 400px;
  height: 60px;
`;

export const ContainerNav = styled.div`
  position: absolute;
  inset: 0;
  background: #bef6;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em;
`;

export const BntNav = styled.div`
  padding: 0.5em 1.5em;
  color: #fff;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: #fff3;
  }
`;

export const Title = styled.h1`
  color: black;
`;

export const DivInicial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgb(243, 212, 212);
  color: black;
`;

export const MetadaDaTela = styled.div`
  width: 50%;
`;

export const SectionTexto = styled.section`
  display: flex;
  align-items: center;
  background-color: rgb(243, 212, 212);
`;
