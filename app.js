function cashmoney() {
    confirm("YOU WIN CASH MONEY! SEND US YOUR BANK NUMBER NAME AND ADDRESS!!!");
}


function asktime() {
    let time = prompt("What is the time?",)

    if (time > 1 && time < 18) {
        document.write("Good day.",);
        return;
    }
    else if (time > 19 && time < 24) {
        document.write("Good evening.",);
        return;
    }
    else
        alert("That is an invalid number, please enter a number between 0 and 24");
    asktime()
}
