import logoImg from "/investment-calculator-logo.png";
import "./Header.css";

export function Header() {
  return (
    <header id="header">
      <img src={logoImg} alt="investment website logo" />
      <h1>Investiment Calculator</h1>
    </header>
  );
}
