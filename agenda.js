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
}

function updateCards(number) {

    let cardheader = document.getElementsByClassName("card-header");
    let cardbody = document.getElementsByClassName("card-body");
    for (let i=0; i<3; i++) {
        cardheader[i].innerHTML = calculateDate( agenda2019[number+i].getDayno() );
        cardbody[i].innerHTML = agenda2019[number+i].getTodo();
    }
}

function calculateDate(daynumber) {
    let monthsBreakpoints = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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

function goLeft() {
    daynoToday--;
    updateCards(daynoToday-2);
}

function goRight() {
    daynoToday++;
    updateCards(daynoToday-2);
}

document.getElementById("arrowLeft").addEventListener("click", goLeft);
document.getElementById("arrowRight").addEventListener("click", goRight);
document.getElementById("arrowUp").addEventListener("click", goLeft);
document.getElementById("arrowDown").addEventListener("click", goRight);


let agenda2019 = [];
for (let i = 0; i < 365; i++) {
    agenda2019.push(new agendaEntry(i+1, " * empty * "));
}

// for testing purposes
agenda2019[133] = new agendaEntry(134, "Bootstrap theorie. Pagina bouwen met behulp van bootstrap");
agenda2019[134] = new agendaEntry(135, "SASS theorie doornemen. Pagina bouwen met behulp van SASS");
agenda2019[135] = new agendaEntry(136, "JavaScript Design patterns. Verder werken aan bestaande projecten");

calculateDate(365);
let daynoToday = 135;
updateCards(daynoToday-2);   // get current day in the middle

