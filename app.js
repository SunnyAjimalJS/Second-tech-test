// Calculate the number of grains of wheat on a chessboard given that the number on each square doubles.
// There once was a wise servant who saved the life of a prince. The king promised to pay whatever the servant could dream up. Knowing that the king loved chess, the servant told the king he would like to have grains of wheat. One grain on the first square of a chess board. Two grains on the next. Four on the third, and so on.
// There are 64 squares on a chessboard.
// Write code that shows:
// how many grains were on each square, and
// the total number of grains

const chessboard = [];

class ChessboardSquare {
    constructor(squareNumber, numberOfGrains){
        this.squareNumber = squareNumber;
        this.numberOfGrains = numberOfGrains;
    }
}

for (let i = 1; i <= 64; i++){ 
    const Square = new ChessboardSquare(i, 2 ** (i-1));
    chessboard.push(Square);
}

totalNumber = (squareNumber) => {
    let total = 0;
    for(let i = 0; i < squareNumber; i++){
        total += chessboard[i].numberOfGrains
    }
    return `"The total number of Grains is ${total}"`;
}

console.log(chessboard);
console.log(totalNumber(64));

    /* STEPS */
    //build a class of chessboardSquare which has constructors of a squarenumber and numberofgrains - DONE
    //let the return be an object with the square number and amount of grains - build a function which multiplys the number of grains per square *EXAMPLE BELOW* - DONE
    // {square: 1, numberofgrains: 1}
    // {square: 2, numberofgrains: 2}
    // {square: 3, numberofgrains: 4}
    // Also return how many grains there are in total for all of the squares (64) in a Method which takes the amount of grains and returns totalNumber- DONE 

