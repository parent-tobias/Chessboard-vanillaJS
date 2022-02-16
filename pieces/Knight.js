import moves from "./moves.js";
import Piece from './Piece.js';

const Knight = (...classNames) => (starting) => {
  let current = starting;
  let hasMoved=false;
  const piece = Piece(starting);
  const domNode = piece.domEl();
  domNode.classList.add("knight",...classNames)

  const isValidMove = (target) => {
    const start = Piece.toXY(current);
    const end = Piece.toXY(target)
    // composed move functions. 
    const move1X = moves.xByN(1)(start)(end);
    const move1Y = moves.yByN(1)(start)(end);
    const move2X = moves.xByN(2)(start)(end);
    const move2Y = moves.yByN(2)(start)(end);

    return (move1X && move2Y) || (move2X && move1Y);
  } 

  const to = (target)=>{

    if(isValidMove(target)){
      hasMoved=true;
      current = target;
      piece.to(target)
    } else {
      console.log("Nope nope nope!")
    }
  }

  const domEl = () => piece.domEl()

  return {
    to,
    isValidMove,
    domEl
  }

}

export default Knight;