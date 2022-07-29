import { useState } from "react";
import {Link, useLocation} from "react-router-dom";

function Header({email, onLogout}) {
  const location = useLocation()
  const [burgerIsOpened, setBurgerIsOpened] = useState(false)

  function handleBurgerClick() {
    setBurgerIsOpened(!burgerIsOpened);
  }

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
        <>
          <button
            className={`header__burger-button ${
              burgerIsOpened && "header__burger-button_opened"
            }`}
            type="button"
            aria-label="показать/скрыть меню"
            onClick={handleBurgerClick}
          />
          <div
            className={`header__menu ${
              burgerIsOpened && "header__menu_opened"
            }`}>
            <p className="header__email">{email}</p>
            <button
              className="header__logout-button"
              type="button"
              aria-label="Выйти"
              onClick={() => onLogout()}>
              Выйти
            </button>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
