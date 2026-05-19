const preguntas = [
  {
    texto: "¿Qué te gusta hacer en tu tiempo libre?",
    opciones: [
      { texto: "Dibujar, crear historias", puntos: { Animacion: 2 } },
      { texto: "Explorar páginas web o aplicaciones", puntos: { Interaccion: 2 } },
      { texto: "Ver redes sociales, trends o videos virales", puntos: { Marketing: 2 } },
      { texto: "Jugar videojuegos", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "Si te dan un computador ¿qué haces primero?",
    opciones: [
      { texto: "Abro algo para dibujar", puntos: { Animacion: 2 } },
      { texto: "Reviso apps o páginas interesantes", puntos: { Interaccion: 2 } },
      { texto: "Entro a redes sociales o videos", puntos: { Marketing: 2 } },
      { texto: "Descargo o busco un videojuego", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "¿Qué tipo de videos te gustan más?",
    opciones: [
      { texto: "Animaciones o historias dibujadas", puntos: { Animacion: 2 } },
      { texto: "Videos que muestran apps o cosas nuevas", puntos: { Interaccion: 2 } },
      { texto: "Videos de influencers o tendencias", puntos: { Marketing: 2 } },
      { texto: "Gameplays o streamings", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "¿Qué te parece más entretenido?",
    opciones: [
      { texto: "Inventar personajes o mundos", puntos: { Animacion: 2 } },
      { texto: "Descubrir como funcionan las apps", puntos: { Interaccion: 2 } },
      { texto: "Ver qué está de moda", puntos: { Marketing: 2 } },
      { texto: "Pasar niveles o completar juegos", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "Si haces un trabajo en grupo, ¿que es lo que te gusta hacer?",
    opciones: [
      { texto: "Dibujar", puntos: { Animacion: 2 } },
      { texto: "Organizar como se ve y funciona", puntos: { Interaccion: 2 } },
      { texto: "Pensar en cómo hacerlo llamativo", puntos: { Marketing: 2 } },
      { texto: "Crear reglas o desafíos entretenidos", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "Cuando algo te gusta mucho, ¿qué haces normalmente?",
    opciones: [
      { texto: "Intento recrearlo dibujándolo o imaginando algo parecido", puntos: { Animacion: 2 } },
      { texto: "Investigo más sobre cómo funciona o cómo se hizo", puntos: { Interaccion: 2 } },
      { texto: "Lo comparto o lo comento con otros", puntos: { Marketing: 2 } },
      { texto: "Lo vuelvo a hacer o intento mejorar en eso", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "Cuando estás con amigos, ¿Que suelen hacer juntos?",
    opciones: [
      { texto: "Dibujar, inventar historias", puntos: { Animacion: 2 } },
      { texto: "Mostrar páginas, apps o cosas curiosas", puntos: { Interaccion: 2 } },
      { texto: "Ver video, memes o tendencias", puntos: { Marketing: 2 } },
      { texto: "Jugar videojuegos", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "Si tienes que aprender algo nuevo por tu cuenta, ¿qué eliges?",
    opciones: [
      { texto: "Dibujar mejor o crear personajes", puntos: { Animacion: 2 } },
      { texto: "Entender cómo funcionan cosas en internet ", puntos: { Interaccion: 2 } },
      { texto: "Saber qué está de moda o qué le gusta a la gente", puntos: { Marketing: 2 } },
      { texto: "Aprender trucos o habilidades en juegos", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "¿Qué tipo de regalo te haría más feliz?",
    opciones: [
      { texto: "Un cuaderno o tablet para dibujar", puntos: { Animacion: 2 } },
      { texto: "Una subscripción a una app nueva o algo para crear en internet", puntos: { Interaccion: 2 } },
      { texto: "Algo popular o que esté de moda", puntos: { Marketing: 2 } },
      { texto: "Una consola", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "Cuando ves una película o serie, ¿qué es lo que más recuerdas después?",
    opciones: [
      { texto: "Los personajes y cómo se veían", puntos: { Animacion: 2 } },
      { texto: "Cómo estaba hecha o presentada", puntos: { Interaccion: 2 } },
      { texto: "Las escenas que todos comentan", puntos: { Marketing: 2 } },
      { texto: "Las partes más emocionantes o de acción", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "Si pudieras elegir un plan para el fin de semana, ¿cuál sería?",
    opciones: [
      { texto: "Crear algo (dibujos, historias, personajes)", puntos: { Animacion: 2 } },
      { texto: "Explorar cosas nuevas en internet", puntos: { Interaccion: 2 } },
      { texto: "Salir, grabar o ver cosas en tendencia", puntos: { Marketing: 2 } },
      { texto: "Jugar videojuegos", puntos: { Videojuegos: 2 } }
    ]
  },
  {
    texto: "¿Qué tipo de canal o contenido te gustaría tener?",
    opciones: [
      { texto: "Historias animadas o dibujos", puntos: { Animacion: 2 } },
      { texto: "Mostrar cosas útiles o interesantes de internet", puntos: { Interaccion: 2 } },
      { texto: "Contenido viral o entretenido", puntos: { Marketing: 2 } },
      { texto: "Videos de juegos", puntos: { Videojuegos: 2 } }
    ]
  },
];

let resultados = {
  Animacion: 0,
  Interaccion: 0,
  Marketing: 0,
  Videojuegos: 0
};

document.getElementById("registro").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    nombre: formData.get("nombre"),
    email: formData.get("email")
  };

  await fetch("/.netlify/functions/subscribe", {
    method: "POST",
    body: JSON.stringify(data)
  });

  if (response.ok) {
  document.getElementById("pantalla-registro").style.display = "none";
  document.getElementById("pantalla-test").style.display = "block";
}
});

let preguntaActual = 0;

const preguntaElemento = document.getElementById("pregunta");
const opcionesContainer = document.getElementById("opciones-container");
const btnSiguiente = document.getElementById("btn-siguiente");
const resultadoContainer = document.getElementById("resultado");
const resultadoTexto = document.getElementById("resultado-texto");

const mensajes = {
  Animacion: "Te gusta crear, imaginar y dar vida a personajes. Podrías disfrutar mucho el mundo de la Animación Digital 🎨",
  Interaccion: "Te interesa cómo funcionan las cosas y que sean fáciles de usar. La Interacción Digital puede ser lo tuyo 💻",
  Marketing: "Te llama la atención lo que es tendencia y conectar con otras personas. El Marketing Digital es una gran opción 📱",
  Videojuegos: "Te gustan los desafíos, jugar y entender cómo funcionan los juegos. El desarrollo de videojuegos puede ser ideal para ti 🎮"
};

function mostrarPregunta() {
  btnSiguiente.disabled = true;
  opcionesContainer.innerHTML = "";

  const pregunta = preguntas[preguntaActual];
  preguntaElemento.textContent = pregunta.texto;

  pregunta.opciones.forEach(opcion => {
    const boton = document.createElement("button");
    boton.textContent = opcion.texto;
    boton.classList.add("btn", "btn-outline-primary", "w-100", "mb-2");

    boton.addEventListener("click", () => {
      for (let carrera in opcion.puntos) {
        resultados[carrera] += opcion.puntos[carrera];
      }

      btnSiguiente.disabled = false;

      document.querySelectorAll("#opciones-container button")
        .forEach(btn => btn.classList.remove("active"));

      boton.classList.add("active");
    });

    opcionesContainer.appendChild(boton);
  });

  actualizarProgreso();
}

btnSiguiente.addEventListener("click", () => {
  preguntaActual++;

  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    actualizarProgreso(); // ← para que llegue a 100%
    mostrarResultado();
  }
});

function actualizarProgreso() {
  let progreso = ((preguntaActual) / preguntas.length) * 100;

  const barra = document.getElementById("barra-progreso");
  barra.style.width = progreso + "%";
  barra.textContent = Math.round(progreso) + "%";
}

function mostrarResultado() {
  document.getElementById("pregunta-container").style.display = "none";
  opcionesContainer.style.display = "none";
  btnSiguiente.style.display = "none";
  resultadoContainer.style.display = "block";

  const total = Object.values(resultados).reduce((a, b) => a + b, 0);

  let html = "";

  // ordenar resultados
  let resultadosOrdenados = Object.entries(resultados)
    .map(([carrera, puntos]) => {
      let porcentaje = total === 0 ? 0 : (puntos / total) * 100;
      return { carrera, porcentaje };
    })
    .sort((a, b) => b.porcentaje - a.porcentaje);

  // ganador
  let ganador = resultadosOrdenados[0];

  // 🥇 MENSAJE ARRIBA DE TODO
  html += `
  <div class="mb-4 p-4 alert alert-info text-center">
    <h2>${ganador.carrera}</h2>
    <p>${mensajes[ganador.carrera]}</p>
    <div class="progress mt-3">
      <div class="progress-bar bg-success" style="width: ${ganador.porcentaje}%">
        ${ganador.porcentaje.toFixed(1)}%
      </div>
    </div>
  </div>
`;

  // resto
  resultadosOrdenados.slice(1).forEach(item => {
    html += `
      <div class="mb-2">
        <strong>${item.carrera}</strong>
        <div class="progress">
          <div class="progress-bar" style="width: ${item.porcentaje}%">
            ${item.porcentaje.toFixed(1)}%
          </div>
        </div>
      </div>
    `;
  });

  resultadoTexto.innerHTML = html;
}
