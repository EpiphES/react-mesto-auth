import {Link, useLocation} from "react-router-dom";

function Header({email, onLogout}) {
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

      {location.pathname === "/" && (
        <div className="header__menu">
          <p className="header__email">{email}</p>
          <button className="header__logout-button" type="button" aria-label="Выйти" onClick={()=> onLogout()}>Выйти</button>
        </div>
      )}
    </header>
  );
}

export default Header;
