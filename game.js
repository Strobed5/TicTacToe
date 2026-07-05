const cells = document.querySelectorAll(".cell")
const turnCounter = document.querySelector(".turn-counter")

for (let i = 0; i<9; i++){
    cells[i].addEventListener("click", () => {test(i)})
}

var i=0;

function test(number){
    if (cells[number].textContent != "")
        return
    i++
    cells[number].textContent = i % 2 ===0 ? "X" : "O" 
    turnCounter.textContent = `Player ${i % 2 ===0 ? "X" : "O"} Turn`
    if  (whoHasWon() != null)
        alert(`${whoHasWon()} has won!`)
}

//0 for no one
//1 for X
//2 for O
function whoHasWon(){
    for (let i = 1; i<3;i++){
        let char = i == 1 ? "X" : "O"
        if (cells[0].textContent==char && cells[1].textContent==char && cells[2].textContent==char)
            return char
        if (cells[3].textContent==char && cells[4].textContent==char && cells[5].textContent==char)
            return char
        if (cells[6].textContent==char && cells[7].textContent==char && cells[8].textContent==char)
            return char

        if (cells[0].textContent==char && cells[3].textContent==char && cells[6].textContent==char)
            return char
        if (cells[1].textContent==char && cells[4].textContent==char && cells[7].textContent==char)
            return char
        if (cells[2].textContent==char && cells[5].textContent==char && cells[8].textContent==char)
            return char

         if (cells[0].textContent==char && cells[4].textContent==char && cells[8].textContent==char)
            return char
        if (cells[2].textContent==char && cells[4].textContent==char && cells[6].textContent==char)
            return char
    }
    return null;
}