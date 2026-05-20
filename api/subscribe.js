export default async function handler(req, res) {
  try {

    const data = typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

    const { nombre, email, resultado } = data;

    console.log("Datos recibidos:", data); // 👈 para debug

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          NOMBRE: nombre || "",
          RESULTADO_GANADOR: resultado?.ganador || "",
          PORCENTAJES: JSON.stringify(resultado?.porcentajes || [])
        },
        updateEnabled: true
      })
    });

    const responseData = await response.json();
    console.log("Brevo responde:", responseData);

    if (!response.ok) {
      return res.status(400).json({ error: responseData });
    }

    return res.status(200).json({ message: "Contacto guardado correctamente" });

  } catch (error) {
    console.error("Error real:", error);
    return res.status(500).json({ error: "Error interno" });
  }
}