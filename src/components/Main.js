import React from "react";

function Main() {
  function handleEditAvatarClick() {
    document.querySelector(".popup_type_avatar").classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_type_profile").classList.add("popup_opened");
  }
  function handleAddPlaceClick() {
    document
      .querySelector(".popup_type_add-element")
      .classList.add("popup_opened");
  }

  return (
    <main className="content">
      <section className="profile">
        <a
          href="#"
          className="profile__avatar"
          onClick={handleEditAvatarClick}></a>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать"
              onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__about">исследователь</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить"
          onClick={handleAddPlaceClick}></button>
      </section>

      <ul className="elements"></ul>
    </main>
  );
}

export default Main;
