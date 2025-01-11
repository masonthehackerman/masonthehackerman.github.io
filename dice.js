function dice() {
    let result = Math.floor(Math.random()*6) + 1;
    document.getElementById('diceResult').innerText = result;
}