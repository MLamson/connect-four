export class Won implements State {
  insertToken(): string {
    return "game over, cannot add anymore checkers";
  }
  isFourInARow(): string {
    return "game over";
  }
  checkTie(): string {
    return "no winner";
  }
}
