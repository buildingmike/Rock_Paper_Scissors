let playerScore = 0;
let computerScore = 0


document.getElementById('rock').addEventListener('click',function(){
    let computer = computerChoice();
    let outcome = result('rock', computer);

    document.getElementById('computerChoice').innerText = 'Computer chooses '
    + computer;
    document.getElementById('result').innerText = outcome;

    if(outcome === 'You win!'){
        playerScore++;
    }else if (outcome === 'You lose!'){
        computerScore++;
    }

    document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = computerScore;

});

document.getElementById('paper').addEventListener('click',function(){
    let computer = computerChoice();
    let outcome = result('paper', computer);

    document.getElementById('computerChoice').innerText = 'Computer chooses '
    + computer;
    document.getElementById('result').innerText = outcome;

    if(outcome === 'You win!'){
        playerScore++;
    }else if (outcome === 'You lose!'){
        computerScore++;
    }

    document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = computerScore;

});

document.getElementById('scissors').addEventListener('click',function(){
    let computer = computerChoice();
    let outcome = result('scissors', computer);

    document.getElementById('computerChoice').innerText = 'Computer chooses '
    + computer;
    document.getElementById('result').innerText = outcome;

    if(outcome === 'You win!'){
        playerScore++;
    }else if (outcome === 'You lose!'){
        computerScore++;
    }

    document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = computerScore;

});

document.getElementById('nextRound').addEventListener('click',function(){
    document.getElementById('result').innerText = '';
    document.getElementById('computerChoice').innerText = '';
});

document.getElementById('reset').addEventListener('click',function(){
    document.getElementById('player').innerText = '0';
    document.getElementById('computer').innerText = '0';
    document.getElementById('result').innerText = '';
    document.getElementById('computerChoice').innerText = '';
})

function computerChoice(){
    const choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return   choices[randomChoice];
}

function result(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'You win!';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'You win!';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}
