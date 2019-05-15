
let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];


function updateCards() {

    let x = document.getElementsByClassName("card-header");

    let today = new Date();
    let dd = today.getDate()-1;
    let mm = today.getMonth()+1; 

    for (let i=0; i<3;i++) {
        x[i].innerHTML = dd+i + "-" + mm;
    }

}

updateCards();