const Chessboard = function(domNode) {
  const cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let selected;
  let pieces = [];

  const getSquareSize = (board) => {
    const rect = board.getBoundingClientRect();
    return {
      cell: {
        width: Math.floor(rect.width / 8),
        height: Math.floor(rect.height / 8)
      },
      left: rect.left,
      top: rect.top
    }
  }
  domNode.addEventListener("click", (event) => {

    const { left, top, cell } = getSquareSize(event.currentTarget)
    const x = Math.floor((event.clientX - left) / cell.width)
    const y = Math.ceil((event.clientY - top) / cell.height)

    if (event.target !== event.currentTarget) {
      if (!selected) {
        selected = event.target;
        selected.classList.add("selected")
      } else if (selected !== event.target) {
        selected.classList.remove("selected");
        selected = event.target;
        selected.classList.add("selected");
      } else {
        selected.classList.remove("selected");
        selected = undefined;
      }
    } else {
      if (selected) {

        const currentPiece = pieces.find( piece =>
          piece.domEl().classList.value === selected.classList.value 
        );
        if(currentPiece) currentPiece.to(cols[x]+y)
            // selected.style.gridArea = `${cols[x] + y}`;
        selected.classList.remove("selected");
        selected = undefined;
      }
    }
  })

  const add = (piece) => {
    pieces = [...pieces, piece]
    domNode.appendChild(piece.domEl() );
  }

  return {
    add
  }
}
export default Chessboard;