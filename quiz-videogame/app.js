// Preguntas y opciones para determinar qué videojuego eres
const questionsVG = [
    {
        question: "¿Qué arma o herramienta elegirías para una aventura épica?",
        options: ["Rifle futurista", "Espada legendaria", "Pico y bloques", "Balón de fútbol"]
    },
    {
        question: "¿Qué soundtrack te emociona más?",
        options: ["Música intensa y electrónica", "Melodías de fantasía y aventura", "Sonidos relajantes y creativos", "Cantos de estadio y ambiente deportivo"]
    },
    {
        question: "¿Qué logro te haría sentir más orgulloso?",
        options: ["Ser el MVP en una partida online", "Salvar un reino mágico", "Construir una ciudad increíble", "Ganar un torneo mundial"]
    },
    {
        question: "¿Con qué frase te identificas más?",
        options: ["¡Headshot!", "¡La aventura me llama!", "¡A construir sin límites!", "¡Vamos por la copa!"]
    },
    {
        question: "¿Qué tipo de comunidad prefieres?",
        options: ["Competitiva y desafiante", "Colaborativa y creativa", "Abierta y diversa", "Apasionada por el deporte"]
    }
];

// Juegos famosos para resultados
const resultsVG = [
    {
        name: "Call of Duty",
        description: "¡Eres competitivo y te gustan los retos intensos! Los shooters y la acción son lo tuyo.",
        img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Call_of_Duty_Logo.png"
    },
    {
        name: "The Legend of Zelda",
        description: "Te encanta la aventura, la exploración y descubrir nuevos mundos llenos de historia.",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/The_Legend_of_Zelda_Logo.svg"
    },
    {
        name: "Minecraft",
        description: "Eres creativo, te gusta construir y dejar volar tu imaginación en mundos infinitos.",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Minecraft_logo.svg"
    },
    {
        name: "FIFA",
        description: "Te gusta la competencia sana, el trabajo en equipo y los deportes. ¡El fútbol es tu pasión!",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/36/FIFA_series_logo.png"
    }
];

let currentVG = 0;
let answersVG = [];

const quizDivVG = document.getElementById('quizvg');
const nextBtnVG = document.getElementById('nextvg-btn');
const resultDivVG = document.getElementById('resultvg');
const restartBtnVG = document.getElementById('restartvg-btn');

function showQuestionVG() {
    const q = questionsVG[currentVG];
    quizDivVG.innerHTML = `
        <div class="question">${q.question}</div>
        <div class="options">
            ${q.options.map((opt, i) => `<button class="option-btn${answersVG[currentVG]===i?' selected':''}" onclick="selectOptionVG(${i})">${opt}</button>`).join('')}
        </div>
    `;
    nextBtnVG.style.display = answersVG[currentVG] !== undefined ? 'inline-block' : 'none';
}

window.selectOptionVG = function(index) {
    answersVG[currentVG] = index;
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
    nextBtnVG.style.display = 'inline-block';
}

nextBtnVG.onclick = function() {
    if (currentVG < questionsVG.length - 1) {
        currentVG++;
        showQuestionVG();
    } else {
        showResultVG();
    }
};

function showResultVG() {
    quizDivVG.style.display = 'none';
    nextBtnVG.style.display = 'none';
    resultDivVG.style.display = 'block';
    // Sumar puntos por cada respuesta para determinar el juego
    let counts = [0,0,0,0];
    answersVG.forEach(a => { if(a!==undefined) counts[a]++; });
    let max = Math.max(...counts);
    let idx = counts.indexOf(max);
    const res = resultsVG[idx];
    resultDivVG.innerHTML = `<h2>${res.name}</h2><img src="${res.img}" alt="${res.name}" style="max-width:120px;margin:1rem auto;display:block;"><p>${res.description}</p>`;
    restartBtnVG.style.display = 'block';
}

restartBtnVG.onclick = function() {
    currentVG = 0;
    answersVG = [];
    quizDivVG.style.display = '';
    resultDivVG.style.display = 'none';
    restartBtnVG.style.display = 'none';
    showQuestionVG();
};

showQuestionVG();
