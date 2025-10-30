// DICE ROLLING GAME
function rollDice() {
  let diceNum = document.getElementById("diceNum").value;
  let diceResult = document.getElementById("diceResult");
  let diceImg = document.getElementById("diceImg");
  const values = [];
  const images = [];

  for (i = 0; i < diceNum; i++) {
    const minNum = 1;
    const maxNum = 6;
    const value = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    values.push(value);
    images.push(`<img src="images/${1}.png" alt="Dice ${value}">`);
  }
  console.log(values);
  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImg.innerHTML = images.join("");
}
