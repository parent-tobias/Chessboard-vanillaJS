import moves from "./moves.js";
import Piece from './Piece.js';

const King = (...classNames) => (starting) => {
  let current = starting;
  let hasMoved=false;
  const piece = Piece(starting);
  const domNode = piece.domEl();
  domNode.classList.add("king",...classNames)

  const isValidMove = (target) => {
    const start = Piece.toXY(current);
    const end = Piece.toXY(target)
    const move0X = moves.xByN(0)(start)(end);
    const move0Y = moves.yByN(0)(start)(end);
    const move1X = moves.xByN(1)(start)(end);
    const move1Y = moves.yByN(1)(start)(end);

    return (move0X||move1X) && (move0Y||move1Y)

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

export default King;