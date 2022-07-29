import { useState } from "react";
import { Link, Route } from "react-router-dom";

function Header({email, onLogout}) {
  const [burgerIsOpened, setBurgerIsOpened] = useState(false)

  function handleBurgerClick() {
    setBurgerIsOpened(!burgerIsOpened);
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <Route path="/sign-in">
        <Link to="/sign-up" className="header__link">
          Регистрация
        </Link>
      </Route>
      <Route path="/sign-up">
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      </Route>
      <Route exact path="/">
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
      </Route>
    </header>
  );
}

export default Header;
