function checkPassword() {
    const pass = document.getElementById('password').value.trim();
    let message = '';

    if (pass === "7159") {
        message = "good work person good good good work";
    }
    else {
        message = "try again"
    }
    document.getElementById('passwordResult').innerText = message;
}