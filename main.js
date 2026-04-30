let colors = ["red", "blue", "green", "yellow", "brown"];
let caseDivs = document.querySelectorAll(".case");
// let zoneColor = document.querySelector("#zoneColor");

caseDivs.forEach(caseDiv => {
    caseDiv.addEventListener("click", handleClickOnDivDOM);
});

function handleClickOnDivDOM(evenement) {
    let divCliquer = evenement.target;
    cleanColor(divCliquer)
}

function cleanColor(divCliquer) {
   divCliquer.classList.remove("red","blue", "green", "yellow", "brown"); 
}



// function handleClickOnColorV() {
//    cleanColor()
//     paragraphe.classList.add("text-green");
// }