let seconds = 0
let tens = 0
let mins = 0
const displayTens = document.getElementById('tens')
const displaySeconds = document.getElementById('seconds')
const displayMins = document.getElementById('mins')

const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')
let interval


buttonStart.onclick = () => {
  clearInterval(interval)
  interval = setInterval(timer, 10)
}

buttonStop.onclick = () => {
  clearInterval(interval)
}

buttonReset.onclick = () => {
  clearInterval(interval)
  tens = 0
  seconds = 0
  mins=0
  displayTens.innerHTML = `0${tens}`
  displaySeconds.innerHTML = `0${seconds}`
  displayMins.innerHTML = `0${seconds}`

}

const timer = () => {
  tens++

  if (Number(tens) <= 9) {
    displayTens.innerHTML = `0${tens}`
  }

  if (Number(tens) > 9) {
    displayTens.innerHTML = tens
  }

  if (Number(tens) > 99) {
    console.log('seconds')
    seconds++
    displaySeconds.innerHTML = `0${seconds}`
    tens = 0
    displayTens.innerHTML = `0${tens}`
  }

  if (Number(seconds) > 9) {
    displaySeconds.innerHTML = seconds
  }

  if(Number(seconds)>59){
    mins++
    seconds=0
    tens=0
    console.log('mins',mins)
    displaySeconds.innerHTML= `0${seconds}`
    displayTens.innerHTML= `0${tens}`
    displayMins.innerHTML= `0${mins}`
  }

  if(Number(mins)>9){
    displayMins.innerHTML= mins
  }


}
