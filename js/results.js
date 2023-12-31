import { results, mbtis } from './data.js'

// 주소 쿼리스트링에서 mbti 값을 가져오기!
const mbti = new URLSearchParams(location.search).get('mbti')
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const characterEl =document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')


// 각 요소에 내용을 채워넣기
titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index]
})
