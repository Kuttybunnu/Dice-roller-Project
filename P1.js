function rollDice(){
  // Generates a random number from 1 to 100
  let number = Math.floor(Math.random() * 100) + 1;
  
  let diceElement = document.getElementById("dice");
  let resultElement = document.getElementById("result");
  
  // Check if the rolled number is 100
  if (number === 100) {
    // Display the QR code image inside the dice box
    diceElement.innerHTML = '<img src="Screenshot 2026-10-16 174456.png" alt="Scan to win" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px;">';
    diceElement.style.fontSize = "0px"; 
    
    // Instruction text telling them to scan for the million
    resultElement.innerHTML = "🎉 JACKPOT! You rolled 100!<br><strong>Scan the QR code to claim your 1 Million Pounds!</strong>";
  } else {
    // Clear out the image and display the regular number
    diceElement.innerHTML = "";
    diceElement.textContent = number;
    diceElement.style.fontSize = "90px";
    
    resultElement.textContent = "You rolled: " + number;
  }
}