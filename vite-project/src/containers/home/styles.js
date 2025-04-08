import styled from "styled-components";

export const Nav = styled.div`
  position: relative;
  width: 400px;
  height: 60px;
`;

export const Svg = styled.svg`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

export const Rect = styled.rect`
  stroke-dashoffset: 5;
  stroke-dasharray: 0 0 10 40 10 40;
  transition: 0.5s;
  stroke: #000;
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

  &:hover ${Svg} ${Rect} {
    transition: 999999s;
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }
`;

export const BntNav = styled.div`
  padding: 0.5em 1.5em;
  color: #000000;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: #fff3;
  }

  &:nth-child(1):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 2 8 73.3 8 10.7;
  }
  &:nth-child(2):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 12.6 9.5 49.3 9.5 31.6;
  }
  &:nth-child(3):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 24.5 8.5 27.5 8.5 55.5;
  }
  &:nth-child(4):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 34.7 6.9 10.2 6.9 76;
  }
  &:hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
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
