import React from "react";

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <a
          href="#"
          className="profile__avatar"
          onClick={props.onEditAvatar}></a>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать"
              onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__about">исследователь</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить"
          onClick={props.onAddPlace}></button>
      </section>

      <ul className="elements"></ul>
    </main>
  );
}

export default Main;
