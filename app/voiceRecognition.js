const kickElement = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lag = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  kick = e.results[0][0].transcript
  displayKickScreen(kick)
  checksIfTheGuessIsAValidValue(kick)
}

function displayKickScreen(kick) {
  kickElement.innerHTML = `
    <div> Você disse: </div>
    <span class="box">${kick}</span>
  `
}

recognition.addEventListener('end', () => recognition.start())