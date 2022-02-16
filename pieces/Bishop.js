import moves from "./moves.js";
import Piece from './Piece.js';

const Bishop = (...classNames) => (starting) => {
  let current = starting;
  let hasMoved=false;
  const piece = Piece(starting);
  const domNode = piece.domEl();
  domNode.classList.add("bishop",...classNames)

  const isValidMove = (target) => {
    return moves.diagonal(Piece.toXY(current))(Piece.toXY(target));
  }

  const to = (target)=>{
    if( isValidMove(target) ){
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

export default Bishop;