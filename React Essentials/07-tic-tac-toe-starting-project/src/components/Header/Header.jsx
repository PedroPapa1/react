import gameLogo from "/game-logo.png";

export function Header() {
  return (
    <header>
      <img src={gameLogo} alt="Hand-draw tic tac toe game board" />
      <h1>React Tic-Tac-Toe</h1>
    </header>
  );
}
