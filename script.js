import Chessboard from './Chessboard.js';
import Rook from './pieces/Rook.js';
import Knight from './pieces/Knight.js';
import Bishop from './pieces/Bishop.js';
import Queen from './pieces/Queen.js';
import King from './pieces/King.js';


const chessboard = Chessboard(document.querySelector(".chessboard"));

chessboard.add(Rook("black", "queens")("A1"))
chessboard.add(Knight("black", "queens")("B1"))
chessboard.add(Bishop("black", "queens")("C1"))
chessboard.add(Queen("black")("D1"))
chessboard.add(King("black")("E1"))
chessboard.add(Bishop("black", "kings")("F1"))
chessboard.add(Knight("black", "kings")("G1"))
chessboard.add(Rook("black", "kings")("H1"))
chessboard.add(Rook("white", "queens")("A8"))
chessboard.add(Knight("white", "queens")("B8"))
chessboard.add(Bishop("white", "queens")("C8"))
chessboard.add(Queen("white")("D8"))
chessboard.add(King("white")("E8"))
chessboard.add(Bishop("white", "kings")("F8"))
chessboard.add(Knight("white", "kings")("G8"))
chessboard.add(Rook("white", "kings")("H8"))
/****
 * We could have initialized each piece if we
 *  needed, like so:
 * 
 * const bqRook = Rook("black", "queens")("A0");
 * 
 * and then moving is as simple as
 * 
 * bqRook.to("A5") 
 * 
 * But as it is, the chessboard itself passes the
 *  move to each piece it contains as needed, and
 *  the piece determines if its a legal move. If 
 *  it is, it will go ahead and move.
 ****/
