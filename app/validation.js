function checksIfTheGuessIsAValidValue(kick) {
  const number = +kick

  if(invalidKick(number)){
    kickElement.innerHTML += (`<div> valor inválido </div>`)
    return
  }
  
  if (numberIsGreaterOrLessThanAllowed(number)){
    kickElement.innerHTML += (`<div> valor inválido: Fale um valor entre ${lowerValue} a ${highestValue} </div>`)
    return
  }
  
  if (number === secretNumber) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O numero secreto era ${secretNumber}</h3>
      
      <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    return
  } else if (number < secretNumber) {
    kickElement.innerHTML += `
    <div> o numero numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `
    return
  } else if (number > secretNumber) {
    kickElement.innerHTML += `
    <div> o numero o numero secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>
    `
    return
  }
}

function invalidKick(number){
  return Number.isNaN(number)
}

function numberIsGreaterOrLessThanAllowed(number) {
  return number > highestValue || number < lowerValue
}

document.body.addEventListener('click', e => {
  if(e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})