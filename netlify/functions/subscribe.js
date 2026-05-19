exports.handler = async function(event) {
  try {
    const data = JSON.parse(event.body);

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

    const result = await response.json();

    console.log("Brevo response:", result);

    return {
      statusCode: response.status,
      body: JSON.stringify(result)
    };

  } catch (error) {
    console.log("ERROR:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
