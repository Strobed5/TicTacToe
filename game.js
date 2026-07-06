var turnNumber = 0;

const cells = document.querySelectorAll(".cell")
const turnCounter = document.querySelector(".turn-counter")

document.querySelector(".reset").addEventListener("click", resetBoard);

for (let i = 0; i < 9; i++) {
    cells[i].addEventListener("click", () => { onCellClick(i) })
}


function onCellClick(number) {
    if (cells[number].textContent != "")
        return
    turnNumber++
    cells[number].textContent = turnNumber % 2 === 0 ? "X" : "O"
    turnCounter.textContent = `Player ${turnNumber % 2 === 0 ? "O" : "X"} Turn`
    if (whoHasWon() != null) {
        alert(`${whoHasWon()} has won!`)
        setTimeout(resetBoard, 500);
    }else if(turnNumber == 9){

        turnCounter.textContent = "   ";
        alert("Draw")
        setTimeout(resetBoard,500);
    }
}

function resetBoard() {
    turnNumber = 0;
    turnCounter.textContent = `Player ${turnNumber % 2 === 0 ? "O" : "X"} Turn`
    for (let i = 0; i < 9; i++) {
        cells[i].textContent = ""

    }

}

function whoHasWon() {
    for (let i = 1; i < 3; i++) {
        let char = i == 1 ? "X" : "O"
        if (cells[0].textContent == char && cells[1].textContent == char && cells[2].textContent == char)
            return char
        if (cells[3].textContent == char && cells[4].textContent == char && cells[5].textContent == char)
            return char
        if (cells[6].textContent == char && cells[7].textContent == char && cells[8].textContent == char)
            return char

        if (cells[0].textContent == char && cells[3].textContent == char && cells[6].textContent == char)
            return char
        if (cells[1].textContent == char && cells[4].textContent == char && cells[7].textContent == char)
            return char
        if (cells[2].textContent == char && cells[5].textContent == char && cells[8].textContent == char)
            return char

        if (cells[0].textContent == char && cells[4].textContent == char && cells[8].textContent == char)
            return char
        if (cells[2].textContent == char && cells[4].textContent == char && cells[6].textContent == char)
            return char
    }
    return null;
}