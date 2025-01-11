function checkSmell() {
    const name = document.getElementById('name').value.trim();
    let message = '';

    if (name === "Megan") {
        message = "You smell like a foot";
    } else if (name === "Mason") {
        message = "You smell like flowers";
    } else if (name === "Tor") {
        message = "You smell like a stinky brother";
    } else if (name === "Karen") {
        message = "You smell like coke";
    } else if (name === "Hayden") {
        message = "You smell smarter than Tor";
    } else if (name ===  "Wendy") {
        message = "You smell like a bee"
    } else if (name ===  "Marc") {
        message = "You smell like a working man"
    } else if (name ===  "Roy") {
        message = "You smell like a farmer"
    } else if (name ===  "Brian") {
        message = "You smell like a phone"
    }
    else if (name ===  "Brandon") {
        message = "You smell like a fart bug"
    }
    else if (name ===  "Nina") {
        message = "You smell like you love Hayden"
    }
    else if (name ===  "Brooks") {
        message = "You smell like a good baby"
    }
    else if (name ===  "Gary") {
        message = "You smell like a good bird"
    }
    else if (name ===  "Craig") {
        message = "You smell like good dad"
    }
    else if (name ===  "Charlotte") {
        message = "You smell like you love tor"
    } 
    else if (name ===  "Taylor") {
        message = "You smell like you farded"
    }
    else if (name ===  "Eric") {
        message = "You smell like you pooped"
    }
    else {
        message = "I don't know how you smell. Please try again"
    }
    document.getElementById('result').innerText = message;
}