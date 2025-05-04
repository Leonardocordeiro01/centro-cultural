import styled from "styled-components";
import BackgroundCachoeira from "./cachoeira.jpg";

export const Div = styled.div`
  position: relative; /* Necessário para o posicionamento do pseudo-elemento */
  height: 100%;
  overflow: hidden; /* Garante que nada saia da div */

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
    filter: blur(5px); /* Aplica o desfoque apenas à imagem */
    z-index: 1; /* Coloca a imagem atrás do conteúdo */
  }
`;
export const DivInt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  position: relative; /* Necessário para garantir que o conteúdo fique acima do pseudo-elemento */
  z-index: 2; /* Garante que o conteúdo fique acima da imagem desfocada */
`;
export const Form = styled.form`
  margin-top: 60px;
  display: flex;
  align-items: left;
  justify-content: center;
  align-content: center;
  gap: 30px;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem;
  width: 40%;
  min-width: 400px;
  height: 80%;
  min-height: 500px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const FormTitle = styled.p`
  font-size: 2.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  text-align: center;
  color: #000;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 95%;
  min-width: 300px;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin: 8px 0;
  outline: none;
`;

export const SubmitButton = styled.button`
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
  border: 1px solid #e5e7eb;
  outline: none;
  margin-top: 8px;
`;

export const SignUpLink = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;

  a {
    text-decoration: underline;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
