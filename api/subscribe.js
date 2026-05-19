export default async function handler(req, res) {
  try {
    const data = req.body;

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: data.email,
        attributes: {
          FIRSTNAME: data.nombre
        },
        updateEnabled: true
      })
    });

    if (!response.ok) {
      return res.status(400).json({ error: "Error al guardar contacto" });
    }

    return res.status(200).json({ message: "Contacto guardado correctamente" });

  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}