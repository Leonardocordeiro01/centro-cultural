import styled from "styled-components";
import BandeiraTcheca from "./img/bandeirastb.png";

export const Title = styled.h1`
  color: #212121;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const SmallerTitle = styled.h2`
  color: #212121;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const SubTitle = styled.h3`
  color: #212121;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const Text = styled.p`
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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    margin-top: 50px;
  }
`;

export const ScreenHalf = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  gap: 25px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    text-align: center;
    padding: 0 10px;
  }
`;

export const ImgHalf = styled.div`
  width: auto;
  height: 70vh;
  display: flex;
  padding: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    justify-content: center;

    img {
      width: 90%;
      height: auto;
      object-fit: contain;
      margin: 50px 0 20px 0;
    }
  }
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

  @media (max-width: 768px) {
    height: auto;
    padding: 20px 10px;
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
  gap: 20px;

  & p {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 20px;
    height: auto;
    margin-bottom: 50px;
    p {
      font-size: 1rem;
    }
  }
`;

export const DivInitial = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: end;
  margin: 50px 350px;
  padding: 50px;
  gap: 20px;

  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 20px;
    padding: 30px 15px;
  }
`;
