import Navbar from "../../components/Navbar";
import {
  Form,
  FormTitle,
  InputContainer,
  Input,
  SubmitButton,
  DivInt,
} from "./stylesFRC";

function FaloeConosco() {
  return (
    <div>
      <Navbar />
      <DivInt>
        <Form method="POST" action="./email.php">
          <FormTitle>Entre em contato</FormTitle>

          <InputContainer>
            <Input type="text" name="name" placeholder="Enviar Nome " />
            <span></span>
          </InputContainer>

          <InputContainer>
            <Input type="email" name="email" placeholder="Enviar email" />
            <span></span>
          </InputContainer>

          <InputContainer>
            <Input type="text" name="message" placeholder="Enviar Mensagem" />
          </InputContainer>

          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </DivInt>
    </div>
  );
}

export default FaloeConosco;
