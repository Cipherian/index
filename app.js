
function cashmoney() {
    confirm("YOU WIN CASH MONEY! SEND US YOUR BANK NUMBER NAME AND ADDRESS!!!");
}

function asktime() {
    let time = prompt("What is the time?")

    if (time >= 1 && time <= 18) {
        document.write("Good day.");
        return;
    }
    else if (time >= 19 && time <= 24) {
        document.write("Good evening.");
        return;
    }
    else {
        alert("That is an invalid number, please enter a number between 0 and 24");
        asktime();
    }
}

function stars() {
    let star = prompt("Rate this page out of 10 stars");
    for (let i = 1; i <= star; i++) {
        document.write("&#9734");
    }
    if (star <= 4) 
        alert('That is that is not very nice')
    if (star >= 5)
        alert('That is very nice of you')
    }