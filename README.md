# Chessboard-vanillaJS

One of the earlier versions of my grid-based chessboard, this is the basis of an article I wrote for dev.to - the idea was to create a chess-board, and the pieces. There are no "cells" to speak of, they're defined as `grid-template-areas` on the board.

By doing that, we can move a piece by assigning it to a new grid-area, like `grid-area: C3;`. I wasn't sure how it would work, but it is quite lovely and clean!
