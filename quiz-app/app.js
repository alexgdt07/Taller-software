const questions = [
    {
        question: "¿Cuál es la capital de México?",
        options: ["Guadalajara", "Ciudad de México", "Monterrey", "Puebla"],
        answer: 1
    },
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Marsella", "Lyon", "París", "Niza"],
        answer: 2
    },
    {
        question: "¿Cuál es la capital de Brasil?",
        options: ["Brasilia", "Río de Janeiro", "São Paulo", "Salvador"],
        answer: 0
    },
    {
        question: "¿Cuál es la capital de Japón?",
        options: ["Osaka", "Tokio", "Kioto", "Nagoya"],
        answer: 1
    },
    {
        question: "¿Cuál es la capital de Canadá?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: 2
    },
    {
        question: "¿Cuál es la capital de Alemania?",
        options: ["Múnich", "Berlín", "Hamburgo", "Frankfurt"],
        answer: 1
    },
    {
        question: "¿Cuál es la capital de Italia?",
        options: ["Milán", "Venecia", "Roma", "Florencia"],
        answer: 2
    },
    {
        question: "¿Cuál es la capital de España?",
        options: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
        answer: 0
    },
    {
        question: "¿Cuál es la capital de Argentina?",
        options: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"],
        answer: 2
    },
    {
        question: "¿Cuál es la capital de Estados Unidos?",
        options: ["Nueva York", "Washington D.C.", "Los Ángeles", "Chicago"],
        answer: 1
    },
    {
        question: "¿Cuál es la capital de Perú?",
        options: ["Lima", "Cusco", "Arequipa", "Trujillo"],
        answer: 0
    },
    {
        question: "¿Cuál es la capital de Colombia?",
        options: ["Medellín", "Bogotá", "Cali", "Cartagena"],
        answer: 1
    },
    {
        question: "¿Cuál es la capital de Chile?",
        options: ["Valparaíso", "Santiago", "Concepción", "La Serena"],
        answer: 1
    },
    {
        question: "¿Cuál es la capital de Reino Unido?",
        options: ["Londres", "Manchester", "Liverpool", "Birmingham"],
        answer: 0
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
        answer: 2
    },
    {
        question: "¿Cuál es la capital de Rusia?",
        options: ["San Petersburgo", "Moscú", "Kazan", "Ekaterimburgo"],
        answer: 1
    },
    {
        question: "¿Cuál es la capital de China?",
        options: ["Shanghái", "Pekín", "Cantón", "Shenzhen"],
        answer: 1
    },
    {
        question: "¿Cuál es la capital de Egipto?",
        options: ["Alejandría", "El Cairo", "Giza", "Luxor"],
        answer: 1
    },
    {
        question: "¿Cuál es la capital de India?",
        options: ["Bombay", "Nueva Delhi", "Bangalore", "Calcuta"],
        answer: 1
    },
    {
        question: "¿Cuál es la capital de Sudáfrica?",
        options: ["Ciudad del Cabo", "Pretoria", "Johannesburgo", "Durban"],
        answer: 1
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let allQuestions = [
    { question: "¿Cuál es la capital de México?", options: ["Guadalajara", "Ciudad de México", "Monterrey", "Puebla"], answer: 1 },
    { question: "¿Cuál es la capital de Francia?", options: ["Marsella", "Lyon", "París", "Niza"], answer: 2 },
    { question: "¿Cuál es la capital de Brasil?", options: ["Brasilia", "Río de Janeiro", "São Paulo", "Salvador"], answer: 0 },
    { question: "¿Cuál es la capital de Japón?", options: ["Osaka", "Tokio", "Kioto", "Nagoya"], answer: 1 },
    { question: "¿Cuál es la capital de Canadá?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: 2 },
    { question: "¿Cuál es la capital de Alemania?", options: ["Múnich", "Berlín", "Hamburgo", "Frankfurt"], answer: 1 },
    { question: "¿Cuál es la capital de Italia?", options: ["Milán", "Venecia", "Roma", "Florencia"], answer: 2 },
    { question: "¿Cuál es la capital de España?", options: ["Madrid", "Barcelona", "Sevilla", "Valencia"], answer: 0 },
    { question: "¿Cuál es la capital de Argentina?", options: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"], answer: 2 },
    { question: "¿Cuál es la capital de Estados Unidos?", options: ["Nueva York", "Washington D.C.", "Los Ángeles", "Chicago"], answer: 1 },
    { question: "¿Cuál es la capital de Perú?", options: ["Lima", "Cusco", "Arequipa", "Trujillo"], answer: 0 },
    { question: "¿Cuál es la capital de Colombia?", options: ["Medellín", "Bogotá", "Cali", "Cartagena"], answer: 1 },
    { question: "¿Cuál es la capital de Chile?", options: ["Valparaíso", "Santiago", "Concepción", "La Serena"], answer: 1 },
    { question: "¿Cuál es la capital de Reino Unido?", options: ["Londres", "Manchester", "Liverpool", "Birmingham"], answer: 0 },
    { question: "¿Cuál es la capital de Australia?", options: ["Sídney", "Melbourne", "Canberra", "Brisbane"], answer: 2 },
    { question: "¿Cuál es la capital de Rusia?", options: ["San Petersburgo", "Moscú", "Kazan", "Ekaterimburgo"], answer: 1 },
    { question: "¿Cuál es la capital de China?", options: ["Shanghái", "Pekín", "Cantón", "Shenzhen"], answer: 1 },
    { question: "¿Cuál es la capital de Egipto?", options: ["Alejandría", "El Cairo", "Giza", "Luxor"], answer: 1 },
    { question: "¿Cuál es la capital de India?", options: ["Bombay", "Nueva Delhi", "Bangalore", "Calcuta"], answer: 1 },
    { question: "¿Cuál es la capital de Sudáfrica?",
        options: ["Ciudad del Cabo", "Pretoria", "Johannesburgo", "Durban"],
        answer: 1
    }
];

function getRandomQuestions(n) {
    shuffleArray(allQuestions);
    return allQuestions.slice(0, n);
}

let currentQuestion, score, userAnswers;

function startQuiz() {
    questions = getRandomQuestions(10); // Menos preguntas
    currentQuestion = 0;
    score = 0;
    userAnswers = Array(questions.length).fill(null);
    quizDiv.style.display = '';
    resultDiv.style.display = 'none';
    exitBtn.style.display = 'none';
    showQuestion();
    window.scrollTo({ top: quizContainer.offsetTop, behavior: 'smooth' });
}

const quizDiv = document.getElementById('quiz');
const nextBtn = document.getElementById('next-btn');
const resultDiv = document.getElementById('result');
const quizContainer = document.querySelector('.quiz-container');
const exitBtn = document.getElementById('exit-btn');

// Eliminar lógica de pantalla de inicio y mostrar el test directamente
quizContainer.style.display = 'flex';
quizContainer.style.flexDirection = 'column';
quizContainer.style.alignItems = 'center';
quizContainer.style.justifyContent = 'center';
startQuiz();

exitBtn.onclick = function() {
    quizContainer.style.display = 'none';
    startScreen.style.display = 'flex';
};

function showQuestion() {
    const q = questions[currentQuestion];
    quizDiv.innerHTML = `
        <div class="question">${q.question}</div>
        <div class="options">
            ${q.options.map((opt, i) => `<button class="option-btn${userAnswers[currentQuestion]!==null&&userAnswers[currentQuestion]===i?' selected':''}" onclick="selectOption(${i})">${opt}</button>`).join('')}
        </div>
    `;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente';
    nextBtn.style.display = userAnswers[currentQuestion] !== null ? 'inline-block' : 'none';
}

window.selectOption = function(index) {
    userAnswers[currentQuestion] = index;
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
    nextBtn.style.display = 'inline-block';
}

nextBtn.onclick = function() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizDiv.style.display = 'none';
    nextBtn.style.display = 'none';
    resultDiv.style.display = 'block';
    let correct = 0;
    let html = `<strong>¡Completaste el cuestionario!</strong><br>Puntaje: <b>`;
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) correct++;
    });
    html += `${correct} de ${questions.length}</b><br><br>`;
    html += '<ul class="result-list">';
    questions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        html += `<li class="${isCorrect ? 'correct' : 'incorrect'}">${i+1}. ${q.question}<br>Tu respuesta: <b>${userAnswers[i]!==null?q.options[userAnswers[i]]:'Sin responder'}</b><br>Respuesta correcta: <b>${q.options[q.answer]}</b></li>`;
    });
    html += '</ul>';
    html += '<button id="restart-btn" class="main-btn" style="margin-top:1.5rem;">Reiniciar cuestionario</button>';
    resultDiv.innerHTML = html;
    document.getElementById('restart-btn').onclick = startQuiz;
    exitBtn.style.display = 'block';
}
