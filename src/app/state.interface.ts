interface State {
  currentPlayer;
  gameResult;
  placePiece(column: number, row: number);
  resetGame();
  updatePlayer();
}
