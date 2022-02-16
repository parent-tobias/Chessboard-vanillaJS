import moves from "./moves.js";
import Piece from './Piece.js';

const Queen = (...classNames) => (starting) => {
  let current = starting;
  let hasMoved=false;
  const piece = Piece(starting);
  const domNode = piece.domEl();
  domNode.classList.add("queen",...classNames)

  const isValidMove = (target) =>{
    const [start, end] = [Piece.toXY(current), Piece.toXY(target)];

    return moves.diagonal(current)(target)
        || moves.lateral(current)(target);
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

export default Queen;