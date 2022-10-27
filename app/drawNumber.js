const lowerValue = 0
const highestValue = 100
const secretNumber = generateRandomNumber()

function generateRandomNumber() {
  return parseInt(Math.random() * highestValue + 1)
}

console.log(secretNumber)

const elementLowerValue = document.getElementById('menor-valor')
elementLowerValue.innerHTML = lowerValue

const elementHighestValue = document.getElementById('maior-valor')
elementHighestValue.innerHTML = highestValue

