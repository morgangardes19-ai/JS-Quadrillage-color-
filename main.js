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

//   function getRandom(0, 4) {
//     let random = Math.random
//   }


// function getRandom(0, 4) {
//   min = Math.ceil(0);
//   max = Math.floor(4);
//   return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
// }

