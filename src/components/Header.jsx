
import logo from '../assets/calc.png'; 
import '../components/Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Calc Logo" className="logo" />
    </header>
  );
};

export default Header;