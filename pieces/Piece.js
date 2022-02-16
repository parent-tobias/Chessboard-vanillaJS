const Piece = (starting) => {
  let current = starting;
  
  const domNode = document.createRange().createContextualFragment(`<div class="chess-piece"></div>`).firstChild;

  domNode.style.gridArea=starting;

  let domEl = () => domNode;

  /***
   * Any piece will need to implement its own!
   */
  const isValidMove = (current)=>(target)=>{
    return true;
  }

  const to = (target) =>{
    current=target;
    domNode.style.gridArea=target;
  }

  return {
    domEl,
    to
  }
}

Piece.toXY = ([xLetter,y]) => {
  return {
    x:'ABCDEFGH'.indexOf(xLetter),
    y:Number(y)
  }
}

export default Piece; 