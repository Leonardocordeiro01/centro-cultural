import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
`;

export const Svg = styled.svg`
  position: absolute;
  inset: 0;
  pointer-events: none;
  fill: #fce57e;
  background: rgba(255, 255, 255, 0.32);
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5em;

  &:hover ${Svg} ${Rect} {
    transition: 999999s;
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }
`;

export const NavButton = styled(Link)`
  padding: 0.5em 1.5em;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: 0.1s;
  text-decoration: none;
  font-weight: bold;
  z-index: 1;

  &:hover {
    background: rgb(204, 204, 204);
  }

  &:nth-child(1):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 8.3 77.3 9 345;
  }
  &:nth-child(2):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 8.3 13 51.65 13 61.5;
  }
  &:nth-child(3):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 20.5 13 27.3 13 73;
  }
  &:nth-child(4):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 32.6 12 5.1 12 91;
  }
  &:hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
  }
`;
