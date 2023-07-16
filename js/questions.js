import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
//결과
let mbti = ''

function renderQuestion(){
    const question = questions[currentNumber]
    numberEl.innerHTML = question.number
    questionEl.innerHTML = question.question
    choice1El.innerHTML = question.choices[0].text
    choice2El.innerHTML = question.choices[1].text
    progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

// 다음 질문으로 넘어가는 함수에요!
function nextQuestion(choiceNumber) {
    // 더 이상 질문이 없으면, 결과 페이지를 보여줘요!
    if (currentNumber === questions.length - 1) {
      showResultPage()
      return
    }
    const question = questions[currentNumber]
    mbti = mbti + question.choices[choiceNumber].value
    currentNumber = currentNumber + 1
    renderQuestion()
  }

// 결과 페이지로 이동!
// 쿼리스트링
function showResultPage() {
    location.href = 'results.html?mbti=' + mbti
  }

choice1El.addEventListener('click', function (){
    nextQuestion(0)
})

choice2El.addEventListener('click', function (){
    nextQuestion(1)
})

//질문 렌더링
renderQuestion();