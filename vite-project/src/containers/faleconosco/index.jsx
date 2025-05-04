import Navbar from "../../components/Navbar";
import {
  Form,
  FormTitle,
  InputContainer,
  Input,
  SubmitButton,
  DivInt,
} from "./stylesFRC";
import { Div } from "./stylesFRC";
import { DivInfo } from "./stylesFRC";
import { SubDiv } from "./stylesFRC";

function FaloeConosco() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/send-email.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Email enviado com sucesso!");
        form.reset(); // limpa os campos
      } else {
        alert("Erro: " + result.message);
      }
    } catch (err) {
      alert("Erro inesperado ao enviar o email.");
      console.error(err);
    }
  };

  return (
    <Div>
      <DivInt>
        <Navbar />
        <Form onSubmit={handleSubmit}>
          <FormTitle>Entre em contato</FormTitle>

          <InputContainer>
            <Input type="text" name="name" placeholder="Enviar Nome" required />
            <span></span>
          </InputContainer>

          <InputContainer>
            <Input
              type="email"
              name="email"
              placeholder="Enviar email"
              required
            />
            <span></span>
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              name="message"
              placeholder="Enviar Mensagem"
              required
            />
          </InputContainer>

          <SubmitButton type="submit">Enviar</SubmitButton>

          <DivInfo>
            <SubDiv>
              <div>
                <h3>Atendimento</h3>
                <p>Segunda a sexta-feira</p>
                <p>8h às 12h | 13h às 17h</p>
              </div>
              <div>
                <h3>E-mail</h3>
                <p>centroculturaldelidice@gmail.com</p>
              </div>
            </SubDiv>
            <SubDiv>
              <div>
                <h3>Atendimento</h3>
                <p>Segunda a sexta-feira</p>
                <p>8h às 12h | 13h às 17h</p>
              </div>
            </SubDiv>
          </DivInfo>
        </Form>
      </DivInt>
    </Div>
  );
}

export default FaloeConosco;
