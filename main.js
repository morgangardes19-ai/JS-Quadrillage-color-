let colors = ["red", "blue", "green", "yellow", "brown"];
let caseDivs = document.querySelectorAll(".case");

caseDivs.forEach(caseDiv => {
    caseDiv.addEventListener("click", handleClickOnDivDOM);
});

function handleClickOnDivDOM(evenement) {
    let divCliquer = evenement.target;
    cleanColor(divCliquer);
    console.log(Math.floor(Math.random() * colors.length));
    divCliquer.classList.add(Math.floor(Math.random() * colors.length));
}


function cleanColor(divCliquer) {
   divCliquer.classList.remove("red","blue", "green", "yellow", "brown"); 
}

