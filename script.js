// --- No Demo Questions ---
let userName = null;

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
