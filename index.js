function countDown(startingNumber) {
    let currentNumber = startingNumber;
  
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
  countDown(10);
  function writeCards(names) {
    const messages = names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
    return messages;
  }
  