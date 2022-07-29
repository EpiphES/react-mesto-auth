import {Link, useLocation} from "react-router-dom";

function Header() {
  const location = useLocation()
  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      {location.pathname === "/sign-in" && (
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
      )}
      {location.pathname === "/sign-up" && (
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      )}
    </header>
  );
}

export default Header;
