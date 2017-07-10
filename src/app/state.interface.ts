interface State {
  currentPlayer;
  gameStatus;
  placePiece(column: number, row: number);
  resetGame();
}
