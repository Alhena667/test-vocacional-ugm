export default async function handler(req, res) {
  try {

    const data = typeof req.body === "string"
      ? JSON.parse(req.body)
      : req.body;

    const { nombre, email, resultado } = data;

    const porcentajesFormateados = resultado?.porcentajes
      ?.map(item => `${item.carrera} ${item.porcentaje.toFixed(1)}%`)
      .join("\n") || "";

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
          PORCENTAJES: porcentajesFormateados
        },
        updateEnabled: true
      })
    });

    if (!response.ok) {
      return res.status(400).json({ error: "Error al guardar contacto" });
    }

    return res.status(200).json({ message: "Contacto guardado correctamente" });

  } catch (error) {
    return res.status(500).json({ error: "Error interno" });
  }
}
