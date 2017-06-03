interface State {
  currentPlayer;
  placePiece(column: number, row: number);
  resetGame();
  checkWin();
  checkTie();
}
