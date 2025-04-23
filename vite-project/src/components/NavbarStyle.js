import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  background: #f5f5f5;

  &:hover ${Svg} ${Rect} {
    transition: 999999s;
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }
`;

export const NavButton = styled(Link)`
  padding: 0.5em 1.5em;
  color: #000000;
  cursor: pointer;
  transition: 0.1s;
  text-decoration: none;

  &:hover {
    background: #fff3;
  }

  &:nth-child(1):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 8.9 77.3 9 345;
  }
  &:nth-child(2):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 8.9 12 53.6 11.8 61.5;
  }
  &:nth-child(3):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 20.5 13.2 28 12.8 73;
  }
  &:nth-child(4):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 33.5 11.6 5.15 11.2 91;
  }
  &:hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
  }
`;
