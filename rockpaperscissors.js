function rockPaperScissors() {
    const input = document.getElementById('rpsInput').value.trim();
    let output = ''
    if (input === "rock") {
        output = "paper"
    }
    if (input === "paper") {
        output = "scissors"
    }
    if (input === "scissors") {
        output = "rock"
    }
    
    output = output + ". You lose!"
    document.getElementById('rpsResult').innerText = output;
}