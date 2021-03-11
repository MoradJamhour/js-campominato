var bombs = [];
var playerImput = [];
var limit;

//l'utente sceglie una difficoltà
var control = true;

while (control) {
  var level = parseInt(prompt("Choose level of difficulty: 1 (easy), 2 (medium) or 3 (hard)"));
  switch (level) {
    case 1:
    limit = 100;
    control = false;
    break;

    case 2:
    limit = 80;
    control = false;
    break;

    case 3:
    limit = 50;
    control = false;
    break;

    default:
    alert("You have to choose or 1 or 2 or 3!!");
    break;
  }
}

//chiamata funzione 16 numeri random
var bombs = createBombs(bombs, limit);
document.getElementById('field').innerHTML = "The tiles with bombs were: " + bombs;

//chiamata funzione punteggio dell'utente
var result = score(bombs, playerImput, limit);
document.getElementById('result').innerHTML = "You ended up with " + result + " points.";

//genero 16 numeri random senza ripetizioni
function createBombs(array,max) {
  while (array.length < 16) {
    var bomb = randomNumber(1, max);
    if (!array.includes(bomb)) {
      array.push(bomb);
    }
  }
  return array;
}

//genero numero random
function randomNumber(min,max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Not a number");
  } else {
    var genNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return genNumber;
  }
}

//l'utente inserisce un numero tra 1 e max senza ripetizioni.Calcolo quante volte ha inserito un numero senza bomba
function score(spawnedNumbers, imputNumbers, max) {
  while (imputNumbers.length < max - 16) {
    var number = parseInt(prompt("Write one number between 1 and " + max));
    if (number >= 1 && number <= max && !isNaN(number) && !imputNumbers.includes(number)) {
      if (!spawnedNumbers.includes(number)) {
        imputNumbers.push(number);
      } else {
        document.getElementById('moves').innerHTML = "Your moves were " + imputNumbers + ", but the wrong one was " + number + ".";
        return imputNumbers.length;
      }
    }
  }
  return imputNumbers.length;
}
