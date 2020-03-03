
const RollTheDice = () => {
  console.log("Soon this function will roll the dice")
  let firstDice = ~~(Math.random() * 6) + 1
  let secondDice = ~~(Math.random() * 6) + 1
  let thirdDice = ~~(Math.random() * 6) + 1
  
  return `${firstDice}${secondDice}${thirdDice}`
}

console.log(
  RollTheDice()
)
