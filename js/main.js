const time = 300

window.addEventListener('load', function () {

  const flashCards = document.querySelectorAll('.flash-card')

  for (const flashCard of flashCards) {
    flashCard.addEventListener('click', startTimer)
  }
})


function startTimer(event) {
  updateTimer(time, event.target.parentElement)
    
  displayTimer(event.target.parentElement)

  setTimer(time, event.target.parentElement)   
     
}

function setTimer(count, flashCard) {
  const timer = setInterval(() => {
    count--

      if (count === 0) {
      clearInterval(timer)
      closeTimer(flashCard)
    }

    updateTimer(count, flashCard)
  
  }, 1000)
}

function displayTimer(flashCard) {

  flashCard.childNodes[1].classList.add("d-none")
  flashCard.childNodes[3].classList.remove("d-none")
}

function closeTimer(flashCard) {
  flashCard.childNodes[1].classList.remove("d-none")
  flashCard.childNodes[3].classList.add("d-none")
}

function updateTimer(seconds, flashCard) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = (seconds - (minutes * 60)).toString()
  const lastZero  = remainingSeconds.length < 2 ? '0' : '' 
  flashCard.childNodes[3].innerHTML =  `${minutes}:${lastZero}${remainingSeconds}`
}