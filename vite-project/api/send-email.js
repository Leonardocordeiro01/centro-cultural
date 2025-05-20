import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
      const { name, email, message } = req.body;
    
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "centroculturalcontato@gmail.com",
          pass: "gmmy qdan ouyl uknl", // SENHA DE APP
        },
      });
  
      const mailOptions = {
        from: email,
        to: "centroculturaldelidice@gmail.com", // DESTINATÁRIO
        subject: "contato - Site Centro Cultural",
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
      };
  
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email enviado com sucesso!" });
      } catch (error) {
        res.status(500).json({ message: "Erro ao enviar email", error });
      }
    } else {
      res.status(405).json({ message: "Método não permitido" });
    }
  }
  