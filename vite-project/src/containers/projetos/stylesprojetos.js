import styled from "styled-components";
import GinasticaCras from "./ginasticacras.jpg";
import Coral from "./coral.jpg";
import Teatro from "./teatro.jpg";
import FundoCachoeira from "./image.png";

export const DivBackgrondImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: url(${FundoCachoeira});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(4.5px);
  z-index: -1;
`;

export const DivInitial = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 200px;
  padding: 50px;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 20px;
    padding: 30px 15px;
  }
`;

export const DivBackimg = styled.div`
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 200px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: 500ms;

  &:hover {
    box-shadow: 0 10px 15px -3px rgb(201, 250, 250);
  }

  @media (max-width: 768px) {
    margin: 20px;
    padding: 15px;
  }
`;

const baseImagem = `
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 250px;
  min-width: 300px;
  border-radius: 10px;

  &:hover .hide-text {
    color: transparent;
    transition: 500ms;
     background-color: transparent;
  }

  & .ButtomCnt {
  background-color: transparent;
  color:rgba(0, 0, 0, 0);
    transition: 500ms;
     background-color: transparent;
  }

  @media (max-width: 480px) {
    min-height: 200px;
  }
`;

export const DivImagem = styled.div`
  background-image: url(${GinasticaCras});
  ${baseImagem}
`;

export const DivImagem2 = styled.div`
  background-image: url(${Coral});
  ${baseImagem}
`;

export const DivImagem3 = styled.div`
  background-image: url(${Teatro});
  ${baseImagem}
`;

export const SmallerTitleP = styled.h3`
  color: rgb(255, 255, 255);
  z-index: 2;
  font-size: 30px;
  width: 100%;
  transition: 500ms;
`;

export const Text = styled.p`
  color: rgb(255, 255, 255);
  z-index: 2;
  font-size: 20px;
  width: 100%;
  transition: 500ms;
  margin-bottom: 20px;
`;

export const PeliculaEscura = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3));
  border-radius: 10px;
  opacity: 1;
  transition: opacity 500ms ease;

  &:hover {
    opacity: 0.1;
  }
`;

export const ScreenHalf = styled.div`
  height: 80vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: left;
  padding-left: 30px;
  padding-top: 30px;
  gap: 15px;

  @media (max-width: 1168px) {
    height: auto;
    padding: 20px;
    width: 100%;
  }
`;

export const ButtonCnt = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 50%;
  height: 40px;
  background: #ffffff;
  color: #000000;
  border-radius: 10px;
  z-index: 1;
  font-size: medium;
  transition: 500ms;
`;
