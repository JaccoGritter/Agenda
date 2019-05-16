"use strict"

class agendaEntry {
    constructor(dayno, todo) {
        this.dayno = dayno;
        this.todo = todo;
    }

    getDayno() {
        return this.dayno;
    }

    getTodo() {
        return this.todo;
    }

    setTodo(entry) {
        this.todo = entry;
    }
}

function updateCards(number) {

    number -= 2;       // get current day in the middle card
    let cardheader = document.getElementsByClassName("card-header");
    let cardbody = document.getElementsByClassName("card-body");
    for (let i=0; i<3; i++) {
        cardheader[i].innerHTML = calculateDate( agenda2019[number+i].getDayno() );
        cardbody[i].innerHTML = agenda2019[number+i].getTodo();
    }
}

function calculateDate(daynumber) {
    let monthsBreakpoints = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

    if (daynumber < 1 || daynumber >365) return;
    let month = 0;
    let day = 0;
    for (let i = 0; i<13; i++) {     
        if (daynumber <= monthsBreakpoints[i]) {
            month = i;
            day = daynumber - monthsBreakpoints[i-1];
            break;
        }
    }
    return(day + " - " + month);
}

function calculateDayNo(month, day) {
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let calculatedMonth = 0;
    for (let i = 0; i < month; i++) calculatedMonth+= months[i];
    return (calculatedMonth + day);
}

function goLeft1() {
    daynoToday -= 1;
    if(daynoToday < 1) daynoToday = 2;
    updateCards(daynoToday);
}

function goLeft7() {
    daynoToday -= 5;                // element will handle the single clicks as well!
    if(daynoToday < 1) daynoToday = 2;
    updateCards(daynoToday);
}

function goRight1() {
    daynoToday += 1;
    updateCards(daynoToday);
}

function goRight7() {
    daynoToday += 5;                // element will handle the single clicks as well!
    updateCards(daynoToday);
}

function edit() {
    document.getElementById("form").style.display = "block";
    document.getElementById("form").value = agenda2019[daynoToday-1].getTodo();
    if (document.getElementById("form").value == " * empty * ") document.getElementById("form").value = "";
}

function processInput() {
    agenda2019[daynoToday-1].setTodo( document.getElementById("form").value );
    document.getElementById("form").value = "";
    document.getElementById("form").style.display = "none";
    updateCards(daynoToday);
}

document.getElementById("arrowLeft").addEventListener("dblclick", goLeft7);
document.getElementById("arrowLeft").addEventListener("click", goLeft1);
document.getElementById("arrowRight").addEventListener("click", goRight1);
document.getElementById("arrowRight").addEventListener("dblclick", goRight7);
document.getElementById("arrowUp").addEventListener("click", goLeft1);
document.getElementById("arrowDown").addEventListener("click", goRight1);

document.getElementById("edit").addEventListener("click", edit);


// Action starts here
let agenda2019 = [];
for (let i = 0; i < 365; i++) {
    agenda2019.push(new agendaEntry(i+1, " * empty * "));
}

let d = new Date();
let daynoToday = calculateDayNo(d.getMonth(),d.getDate());

// for testing purposes
agenda2019[daynoToday-2] = new agendaEntry((daynoToday-1), "Bootstrap theorie. Pagina bouwen met behulp van bootstrap");
agenda2019[daynoToday-1] = new agendaEntry((daynoToday), "SASS theorie doornemen. Pagina bouwen met behulp van SASS");
agenda2019[daynoToday] = new agendaEntry((daynoToday+1), "JavaScript Design patterns. Verder werken aan bestaande projecten");


updateCards(daynoToday);   

