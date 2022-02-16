const moves = {
  lateral: ({x:x1, y:y1}) =>
    ({x:x2, y:y2}) =>
      x1===x2||y1===y2,
  diagonal: ({x:x1, y:y1}) =>
    ({x:x2, y:y2}) =>
      Math.abs(x2-x1)===Math.abs(y2-y1),
  xByN: (num) => 
    ({x:x1, y:y1}) =>
      ({x:x2, y:y2}) => 
        Math.abs(x1-x2)===num,
  yByN: (num) =>
    ({x:x1, y:y1}) =>
      ({x:x2, y:y2}) => 
        Math.abs(y1-y2)===num
};

export default moves;

/***
 * I think that covers everything. 
 * 
 * The pawn would be:
 *   opening: lateral && (xByN(1) || xByN(2) )
 *   move: lateral && xByN(1)
 *   capture: diagonal && xByN(1)
 * And the rest are pretty clean:
 *   rook: lateral
 *   knight: (xByN(1) && yByN(2))||(xByN(2) && yByN(1))
 *   bishop: diagonal
 *   queen: lateral || diagonal
 *   king: xByN(1) && yByN(1)
 ***/