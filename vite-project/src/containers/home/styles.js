import styled from "styled-components";

export const Nav = styled.div`
  position: relative;
  width: 100%;
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

export const NavButton = styled.div`
  padding: 0.5em 1.5em;
  color: #000000;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: #fff3;
  }

  &:nth-child(1):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 8.3 77.3 9 345;
  }
  &:nth-child(2):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 8.9 11.3 53.6 11.8 61.5;
  }
  &:nth-child(3):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 20.5 12.5 28 12.8 73;
  }
  &:nth-child(4):hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 33.5 11.1 5.15 11.2 91;
  }
  &:hover ~ ${Svg} ${Rect} {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
  }
`;

export const Title = styled.h1`
  color: #212121;
  z-index: 2;
`;

export const SmallerTitle = styled.h2`
  color: #212121;
`;

export const SubTitle = styled.h3`
  color: #212121;
  z-index: 2;
`;

export const Text = styled.h3`
  color: #212121;
`;

export const IntroSection = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  padding: 10px 0 10px 0;
  gap: 30px;
`;

export const ScreenHalf = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

export const ImgHalf = styled.div`
  width: auto;
  height: 70vh;
  display: flex;
  padding: 0;
`;

export const SectionText = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 10px 0 15px 0;

  & img {
    width: 100vw;
    height: 30vh;
    position: absolute;
    z-index: 0;
  }
`;
