function checkPassword() {
    const pass = document.getElementById('password').value.trim();
    let message = '';

    if (pass === (Math.random() + 1).toString(36).substring(7)) {
        message = "good work person good good good work";
    }
    else {
        message = "try again"
    }
    document.getElementById('passwordResult').innerText = message;
}

const showPassword = () => {
    const pass = document.getElementById("password");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
  }