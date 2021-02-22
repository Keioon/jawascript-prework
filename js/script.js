var argButtonName, buttonPaper, buttonRock, buttonScissors, argComputerMove, argMoveId, argPlayerMove, playerMove, computerMove;

buttonPaper = document.getElementById('button-Paper');
buttonRock = document.getElementById('button-Rock');
buttonScissors = document.getElementById('button-Scissors');


function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    playerMove = argButtonName;
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);

    displayResult(playerMove, computerMove);  
}

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    }else if (argMoveId == 2) {
        return 'papier';
    }else if (argMoveId == 3) {
        return 'nożyce';
    }else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
        counter1 = counter1 + 1;
    }else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        counter1 = counter1 + 1;
    }else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
        counter1 = counter1 + 1;
    }else if (argPlayerMove == argComputerMove) {
        printMessage('Wygląda na to, że mamy REMIS!');
    }else {
        printMessage('Przegrywasz :(');
        counter2 = counter2 + 1;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonPaper.addEventListener('click', function(){ 
    buttonClicked('papier'); });
buttonRock.addEventListener('click', function(){
    buttonClicked('kamień'); });
buttonScissors.addEventListener('click', function(){ 
    buttonClicked('nożyce'); });