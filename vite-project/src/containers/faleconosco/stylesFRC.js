import styled from "styled-components";

export const DivInt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 90vh;
`;
export const Form = styled.form`
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
