var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
const playBtn = document.getElementById("playBtn");

// 🕒 Ajusta estos tiempos a tu canción real
var lyricsData = [
  { text: "💖 Respirando tu aire 💖", time:3  },
  { text: "⏳ Soñando tus sueños ✨🌙", time: 4 },
  { text: "💌 Hoy quiero que sepas, que tú estas en ellos 💖😊", time: 6 },
  { text: "Que eres la culpable de todos mis desvelos 😍🌹", time: 9 },
  { text: "Quiero que comprendas que tú eres mi anhelo 💫", time: 12 },
  { text: "🌹 Me paso los días 🌹", time: 15 },
  { text: "🌹🌹Las noches enteras 🌙✨🌹🌹 ", time: 17 },
  { text: "Pensando en el amor que corre por mis venas 😊❤️🔥", time: 18},
  { text: "Pensando que buscaba alguien que me quisiera 🤗💖", time: 21},
  { text: "Y que al fin encontré alguien que vale la pena 🎵🎵", time: 25},
  { text: "Y hoy quiero confesarte que mi vida eres tú KIARA 💖😊", time: 27 },
  { text: "El ángel de mi guarda✨😇", time: 30 },
  { text: "El que me entrega su luz 😍🥰", time: 32},
  { text: "La que ilumina el callejón sin salida 💖✨", time: 33 },
  { text: "🤩La que le ha dado una esperanza a mi vida", time: 36 },
  { text: "Y hoy quiero confesarte que mi vida eres tú KIARA 💖😊", time: 39 },
  { text: "El ángel de mi guarda✨😇", time: 42 },
  { text: "El que me entrega su luz 😍🥰", time: 43 },
  { text: "La que ilumina el callejón sin salida 💖✨", time: 45 },
  { text: "🤩La que le ha dado una esperanza a mi vida", time: 48 },
  { text: "💖✨🌹 Te quiero mucho, Kiara 🌹✨💖", time: 51 },
  { text: "Estoy aquí a la luz de la vela 🕯️✨", time: 54 },
  { text: "Escribiendo una canción a la mujer más bella 💌", time: 57 },
  { text: "Porque quiero que sepa que me enamoré de ella 💖😊", time: 60 },
  { text: "Y la quiero llevar conmigo hasta las estrellas  💫🌟", time: 63 },
  { text: "Esa sensación que recorre mi cuerpo 🤩", time: 66 },
  { text: "Cada vez que me miras y se detiene el tiempo ✨💖", time: 69 },
  { text: "Cada vez que me besas 🌹✨💖", time: 72},
  { text: "Me robas el aliento 😍🥰", time: 74 },
  { text: "Tu eres la princesa que me devolvio el cuento ✨👑", time: 75 },
  { text: "Y hoy quiero confesarte que mi vida eres tú KIARA 💖😊", time: 79 },
  { text: "El ángel de mi guarda ✨😇", time: 82},
  { text: "El que me entrega su luz 😍🥰", time: 83},
  { text: "La que ilumina el callejón sin salida 💖✨", time: 84},
  { text: "🤩La que le ha dado una esperanza a mi vida", time: 88},
  { text: "Y quiero confesarte que mi vida eres tú KIARA 💖😊", time: 91},
  { text: "El ángel de mi guarda , el que me entrega su luz ✨😇", time: 94},
  { text: "La que ilumina el callejón sin salida 💘" , time: 97},
  { text: "🤩La que le ha dado una esperanza a mi vida", time: 100},
  { text: "Con mucho amor para la niña que me robo el corazón 💖", time: 102},
];

var fadeInDuration = 0.5; // segundos
var lastIndex = -1;

// 🔹 Muestra la línea correspondiente
function updateLyrics() {
  var time = audio.currentTime;
  var index = lyricsData.findIndex((line, i) =>
    time >= line.time &&
    (i === lyricsData.length - 1 || time < lyricsData[i + 1].time)
  );

  if (index !== -1 && index !== lastIndex) {
    lastIndex = index;
    lyrics.style.opacity = 0;
    lyrics.innerHTML = lyricsData[index].text;
    fadeIn();
  }

  requestAnimationFrame(updateLyrics);
}

// 🔹 Animación de entrada de texto
function fadeIn() {
  let opacity = 0;
  let step = 0.02;
  let fade = setInterval(() => {
    opacity += step;
    lyrics.style.opacity = opacity;
    if (opacity >= 1) clearInterval(fade);
  }, 16);
}



// Evento click en el botón para iniciar música
playBtn.addEventListener("click", () => {
  audio.play().then(() => {
    playBtn.style.display = "";  // Ocultar botón
    lastIndex = -1;
    updateLyrics();  // Iniciar sincronización
  }).catch(e => {
    alert("Error al reproducir música: " + e);
  });
});

// 🔹 Cuando el audio empiece, arranca la sincronización
audio.addEventListener("play", () => {
  lastIndex = -1;
  requestAnimationFrame(updateLyrics);
});

// 🔹 Oculta el título después de 65 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => {
      titulo.style.display = "none";
    }, 3000);
  }
}
setTimeout(ocultarTitulo, 105000);