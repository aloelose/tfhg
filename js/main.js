const quizData = [
    {
        question: "Что согласно Конституции Российской Федерации является «уникальным наследием ее многонационального народа»?",
        a: "1) Литература",
        b: "2) Спорт",
        c: "3) Культура",
        d: "4) Традиционный образ жизни",
        correct: "c",
    },
    {
        question: "Согласно статье 65 Конституции Российской Федерации в состав Российской Федерации входят республики, края, области, автономные округа, автономная область, города федерального \nзначения. Сколько городов федерального значения в России?",
        a: "1) 89",
        b: "2) 24",
        c: "3) 4",
        d: "4) 3",
        correct: "d",
    },
    {
        question: "Какой орган исполнительной власти осуществляет функции по реализации государственных и федеральных программ в сфере межнациональных отношений, социальной и культурной адаптации и интеграции иностранных граждан в Российской Федерации?",
        a: "1) Министерство внутренних дел",
        b: "2) Министерство здравоохранения",
        c: "3) Министерство финансов",
        d: "4) Федеральное агентство по делам национальностей",
        correct: "d",

    }

];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}
var t;
          function up() {
              var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop); // size
              if(top > 0) {
                  window.scrollBy(0,-80);
                  t = setTimeout('up()',15);
              } else clearTimeout(t);
              return false;
          }

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы ответили на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Пройти повторно</button>
            `;
        }
    }
});
