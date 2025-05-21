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
  background: #f5f5f5;

  &:hover ${Svg} ${Rect} {
    transition: 999999s;
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }

    @media (max-width: 768px) {
    display: none;
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

    @media (max-width: 768px) {
    display: block;
  }
`;


export const Hamburger = styled.label`

  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 40px;
  height: 30px;
  cursor: pointer;
  display: block;
  z-index: 1100;
  input {
    display: none;
  }

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  span:nth-of-type(3) {
    top: 100%;
    transform: translateY(-100%);
    transform-origin: left center;
  }

  input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }

  input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }


  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};

  @media (min-width: 769px) {
    display: none !important;
  }

position: fixed; /* ocupa a tela toda */
  top: 63px; /* começa abaixo do navbar */
  left: 0;
  width: 100%;
  height: calc(50vh - 63px); /* ocupa o restante da tela */
  background: rgb(255, 255, 255);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  z-index: 1000;
  

  a {
    font-size: 1.5rem;  
    padding: 1rem 2rem;
    margin: 0.25rem 0;   
    border: 1px solid #ccc; 
    border-radius: 4px;  
    transition: background-color 0.3s ease;
    color: #000;
    text-align: center;
    width: 80%;           
    box-sizing: border-box;
  }

  a:hover {
    background-color: #ddd;  
  }

  a:active {
    background-color: #bbb; 
  }
`;
