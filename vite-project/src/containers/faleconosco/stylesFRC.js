import styled from "styled-components";
import BackgroundCachoeira from "./cachoeira.jpg";

export const Div = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${BackgroundCachoeira});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(4.5px);
    z-index: 1;
  }
`;

export const DivInt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const Form = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-color: #fff;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 20px;
  }
`;

export const FormTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #000;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin: 8px 0;
  outline: none;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.75rem;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: #4f46e5;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  text-transform: uppercase;
  margin-top: 8px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const SignUpLink = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  text-align: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;
