import styled from "styled-components";
import BandeiraTcheca from "./img/bandeirastb.png";

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
  gap: 30px;
`;

export const ScreenHalf = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  gap: 25px;
`;

export const ImgHalf = styled.div`
  width: auto;
  height: 70vh;
  display: flex;
  padding: 0;
`;

export const Sectionflag = styled.section`
  position: relative;
  gap: 8px;
  display: flex;
  flex-direction: column;
  background-image: url(${BandeiraTcheca});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 21vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }

  h1,
  h3 {
    position: relative;
    z-index: 1;
    text-align: center;
    align-items: center;
  }
`;

export const SectionText = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 150px 0 0;

  & p {
    font-size: 1.2rem;
  }
`;

export const DivImgFenix = styled.div`
  width: 50vw;

  & img {
    width: 300px;
  }
`;
