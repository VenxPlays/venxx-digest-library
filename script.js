// --- Punjab/North-East MCQs as provided by user ---
let userName = null;

const DEMO_QUESTIONS = [
  {
    text: "Which political party was majorly involved in Punjab unrest in 1973?",
    options: [
      "Indian National Congress",
      "Bharatiya Janata Party",
      "Akali Dal",
      "Communist Party of India"
    ],
    answer: 2
  },
  {
    text: "Which document demanded Chandigarh as Punjab’s capital and more autonomy for Punjab?",
    options: [
      "Shimla Agreement",
      "Anandpur Sahib Resolution",
      "Assam Accord",
      "Nagaland Peace Accord"
    ],
    answer: 1
  },
  {
    text: "The demand for ‘Independent Khalistan’ was led by which leader?",
    options: [
      "Sant Jarnail Singh Bhindranwale",
      "Jawaharlal Nehru",
      "Laldenga",
      "H.S. Phoolka"
    ],
    answer: 0
  },
  {
    text: "Who was accused of violence and led the Akal Takht group during the Punjab unrest?",
    options: [
      "Sant Harcharan Singh Longowal",
      "Laldenga",
      "Sant Jarnail Singh Bhindranwale",
      "Prafulla Kumar Mahanta"
    ],
    answer: 2
  },
  {
    text: "Operation Blue Star was aimed at:",
    options: [
      "Removing illegal immigrants from Assam",
      "Removing terrorists from the Golden Temple",
      "Achieving statehood for Nagaland",
      "Granting autonomy to Mizoram"
    ],
    answer: 1
  },
  {
    text: "Who led Operation Blue Star in 1984?",
    options: [
      "General V.K. Singh",
      "Major General Kuldeep Singh Brar",
      "General Bipin Rawat",
      "General K. Sunderji"
    ],
    answer: 1
  },
  {
    text: "In which year did Operation Blue Star occur?",
    options: [
      "1982",
      "1983",
      "1984",
      "1985"
    ],
    answer: 2
  },
  {
    text: "What was Operation Black Thunder?",
    options: [
      "Movement for Nagaland’s statehood",
      "Peace agreement in Assam",
      "Military operation similar to Blue Star",
      "Famine relief operation in Mizoram"
    ],
    answer: 2
  },
  {
    text: "Which of the following is NOT a North-Eastern state?",
    options: [
      "Assam",
      "Arunachal Pradesh",
      "Punjab",
      "Mizoram"
    ],
    answer: 2
  },
  {
    text: "The Assam Accord was signed in:",
    options: [
      "1983",
      "1985",
      "1987",
      "1990"
    ],
    answer: 1
  },
  {
    text: "Which organization led the agitation in Assam over Bangladeshi immigrants?",
    options: [
      "Naga National Council",
      "All Assam Students Union",
      "Mizo National Front",
      "Akali Dal"
    ],
    answer: 1
  },
  {
    text: "The Naga National Council (NNC) was associated with which demand?",
    options: [
      "Statehood for Mizoram",
      "Independence for Nagaland",
      "Creation of NEFA",
      "Assam Accord"
    ],
    answer: 1
  },
  {
    text: "Nagaland became a state in:",
    options: [
      "1955",
      "1963",
      "1972",
      "1987"
    ],
    answer: 1
  },
  {
    text: "Which year did Mizoram become a Union Territory?",
    options: [
      "1959",
      "1966",
      "1972",
      "1985"
    ],
    answer: 2
  },
  {
    text: "The famine of 1959 led to the formation of which organization in Mizoram?",
    options: [
      "All Assam Students Union",
      "Naga National Council",
      "Mizo National Front",
      "Akali Dal"
    ],
    answer: 2
  },
  {
    text: "When did Arunachal Pradesh become a full-fledged state?",
    options: [
      "1954",
      "1972",
      "1987",
      "1991"
    ],
    answer: 2
  },
  {
    text: "What does NEFA stand for?",
    options: [
      "North-Eastern Frontier Area",
      "North-East Federal Agreement",
      "North-East Finance Authority",
      "North-East Frontier Agency"
    ],
    answer: 3
  },
  {
    text: "Which Act was passed in 1971 for advising on North-East issues?",
    options: [
      "Assam Accord",
      "Northeastern Council Act",
      "NEFA Act",
      "Operation Blue Star"
    ],
    answer: 1
  },
  {
    text: "Who signed the Assam Accord?",
    options: [
      "Sant Jarnail Singh Bhindranwale",
      "Laldenga",
      "All Assam Students Union and Government of India",
      "Akali Dal"
    ],
    answer: 2
  },
  {
    text: "A military expedition for a specific objective is called:",
    options: [
      "Agitation",
      "Operation",
      "Accord",
      "Resolution"
    ],
    answer: 1
  },

  // Full Forms & Abbreviations
  {
    text: "What is the full form of NEFA?",
    options: [
      "North-East Federal Agreement",
      "North-East Frontier Agency",
      "North-East Finance Association",
      "North-Eastern Frontier Area"
    ],
    answer: 1
  },
  {
    text: "What does MNF stand for in Mizoram’s history?",
    options: [
      "Mizoram National Foundation",
      "Mizoram National Front",
      "Mizo National Front",
      "Mizo National Federation"
    ],
    answer: 2
  },
  {
    text: "What is the full form of NNC?",
    options: [
      "North National Council",
      "Naga National Council",
      "North-East National Council",
      "Nagaland National Committee"
    ],
    answer: 1
  },
  {
    text: "What does AASU stand for in the context of Assam?",
    options: [
      "All Assam Students Union",
      "Assam Agricultural Science University",
      "Assam Association of Student Unions",
      "Assam All Students Union"
    ],
    answer: 0
  },
  {
    text: "What is the full form of the Act passed in 1971 for North-East India?",
    options: [
      "Northeastern Council Act",
      "North-East Council Assembly",
      "North-East Federal Accord",
      "Northeast Community Act"
    ],
    answer: 0
  },
  {
    text: "What does ‘NE’ stand for in NEFA?",
    options: [
      "North-East",
      "North-Eastern",
      "New Era",
      "National Education"
    ],
    answer: 1
  },
  {
    text: "What is the full form of ‘Akal Takht’ as seen in Punjab unrest?",
    options: [
      "Akali Takht",
      "Akal Takht (No abbreviation, it is a Sikh institution)",
      "Akal Training Akademy",
      "Akal Tactical Headquarter"
    ],
    answer: 1
  },
  {
    text: "What does ‘MNF’ stand for in the 1959 Mizoram famine context?",
    options: [
      "Mizo National Front",
      "Mizoram National Federation",
      "Mizoram New Front",
      "Mizo National Federation"
    ],
    answer: 0
  }
];

// Populate demo questions if not already present or override if count differs
if (!localStorage.getItem('quiz-questions') || JSON.parse(localStorage.getItem('quiz-questions')).length !== DEMO_QUESTIONS.length) {
  localStorage.setItem('quiz-questions', JSON.stringify(DEMO_QUESTIONS));
}

// --- HELPERS ---
function showLoginFeedback(msg) { document.getElementById('login-feedback').innerText = msg; }
function login(e) {
  e.preventDefault();
  userName = document.getElementById('student-username').value.trim();
  if (!userName) return showLoginFeedback("Please enter username.");
  document.getElementById('login-container').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('user-name').innerText = userName;
  loadQuiz();
}
function logout() {
  userName = null;
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('login-container').classList.remove('hidden');
  document.getElementById('student-login').reset();
  document.getElementById('login-feedback').innerText = '';
}
function showModal(msg) {
  document.getElementById('modal-message').innerText = msg;
  document.getElementById('modal-bg').classList.remove('hidden');
}
function closeModal() { document.getElementById('modal-bg').classList.add('hidden'); }

// --- QUESTIONS CRUD ---
function getQuestions() {
  const userQs = JSON.parse(localStorage.getItem('quiz-questions') || '[]');
  return [...userQs];
}
function saveStudentResult(student, score) {
  let res = JSON.parse(localStorage.getItem('quiz-results')||'[]');
  res.push({student, score, date: Date.now()});
  localStorage.setItem('quiz-results', JSON.stringify(res));
}

// --- STUDENT: QUIZ LOGIC (ONE BY ONE WITH option color animation) ---
let currentQuestionIndex = 0;
let studentAnswers = [];
function loadQuiz() {
  const qs = getQuestions();
  const quizArea = document.getElementById('quiz-area');
  const noQ = document.getElementById('no-questions');
  if (!qs.length) { noQ.classList.remove('hidden'); quizArea.classList.add('hidden'); return; }
  noQ.classList.add('hidden'); quizArea.classList.remove('hidden');
  document.getElementById('score-area').classList.add('hidden');
  currentQuestionIndex = 0;
  studentAnswers = [];
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const qs = getQuestions();
  const q = qs[currentQuestionIndex];
  const quizQuestionsDiv = document.getElementById('quiz-questions');
  quizQuestionsDiv.innerHTML = `
    <div class="glass p-6 fade-in">
      <div class="font-semibold text-lg neon text-cyan-200 mb-3 animate-bounce">${currentQuestionIndex+1}. ${q.text}</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3" id="options-area">
        ${q.options.map((opt,oi)=>`
          <div>
            <input required type="radio" name="qopt" id="q${currentQuestionIndex}o${oi}" value="${oi}" class="peer hidden option"/>
            <label for="q${currentQuestionIndex}o${oi}" class="option-label block cursor-pointer px-4 py-2 rounded-lg border border-cyan-800 bg-gray-900 text-cyan-100 transition hover:scale-105 duration-200 pop-in">${opt}</label>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  document.getElementById('next-btn').textContent = (currentQuestionIndex === getQuestions().length - 1) ? "Submit Quiz" : "Next";
  document.getElementById('next-btn').disabled = true;
  document.getElementById('next-btn').classList.remove('bg-green-500','bg-red-500','bg-cyan-400','hover:bg-cyan-300','pulse');
  document.getElementById('next-btn').classList.add('bg-cyan-400','pulse');
  // option select logic
  document.querySelectorAll('input[name="qopt"]').forEach((radio,ix) => {
    radio.addEventListener('change', function() {
      // Remove previous classes
      document.querySelectorAll('.option-label').forEach(l=>{
        l.classList.remove('correct','wrong','selected');
        l.style.pointerEvents = "auto";
      });
      // Get the correct option index
      const correctIndex = q.answer;
      const labels = document.querySelectorAll('.option-label');
      // Mark selected
      labels[ix].classList.add('selected');
      // Show green/red for 1s, then enable next
      setTimeout(()=>{
        document.querySelectorAll('.option-label').forEach((label, idx) => {
          if (idx === correctIndex) {
            label.classList.add('correct');
          } else if (radio.value == idx) {
            if (idx !== correctIndex) label.classList.add('wrong');
          }
          label.style.pointerEvents = "none";
        });
        document.getElementById('next-btn').disabled = false;
        if (Number(radio.value) === correctIndex) {
          document.getElementById('next-btn').classList.remove('bg-cyan-400','bg-red-500');
          document.getElementById('next-btn').classList.add('bg-green-500','pulse');
        } else {
          document.getElementById('next-btn').classList.remove('bg-cyan-400','bg-green-500');
          document.getElementById('next-btn').classList.add('bg-red-500','pulse');
        }
      }, 160);
    });
  });
  document.getElementById('quiz-form').onsubmit = function(e) {
    e.preventDefault();
    const selected = document.querySelector('input[name="qopt"]:checked');
    if (!selected) return;
    studentAnswers[currentQuestionIndex] = Number(selected.value);
    if (currentQuestionIndex < getQuestions().length - 1) {
      currentQuestionIndex++;
      renderCurrentQuestion();
    } else {
      let score = 0;
      getQuestions().forEach((q,ix)=>{
        if (studentAnswers[ix] === q.answer) score++;
      });
      saveStudentResult(userName, score+"/"+getQuestions().length);
      showStudentScore(score, getQuestions().length);
    }
  }
}

function showStudentScore(score, total) {
  document.getElementById('quiz-area').classList.add('hidden');
  document.getElementById('score-area').classList.remove('hidden');
  document.getElementById('score-value').innerText = `${score} / ${total}`;
}
function backToQuiz() {
  document.getElementById('score-area').classList.add('hidden');
  document.getElementById('quiz-area').classList.remove('hidden');
  loadQuiz();
}

window.logout = logout;
window.closeModal = closeModal;
window.backToQuiz = backToQuiz;
