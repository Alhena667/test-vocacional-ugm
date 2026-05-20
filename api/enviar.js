import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  try {
    const data = typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

    const { nombre, email, resultado } = data;

    const porcentajes = resultado?.porcentajes
      ?.map(item => `${item.carrera} ${item.porcentaje.toFixed(1)}%`)
      .join("\n") || "";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nuevo resultado Test Vocacional",
      text: `
Nombre: ${nombre}
Email: ${email}

Resultado ganador:
${resultado?.ganador}

Porcentajes:
${porcentajes}
      `,
    });

    return res.status(200).json({
      message: "Correo enviado correctamente"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Error enviando correo"
    });
  }
}