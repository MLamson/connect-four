interface State {
  placePiece(column: number, row: number);
  checkWin();
  checkTie();
}
