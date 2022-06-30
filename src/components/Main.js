import React from "react";

function Main() {
  function handleEditAvatarClick() {
    document
      .querySelector(".popup_type_update-avatar")
      .classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document
      .querySelector(".popup_type_edit-profile")
      .classList.add("popup_opened");
  }
  function handleAddPlaceClick() {
    document
      .querySelector(".popup_type_add-element")
      .classList.add("popup_opened");
  }

  return (
    <main class="content">
      <section class="profile">
        <a href="#" class="profile__avatar" onClick={handleEditAvatarClick}></a>
        <div class="profile__info">
          <div class="profile__title">
            <h1 class="profile__name">Жак-Ив Кусто</h1>
            <button
              class="profile__edit-button"
              type="button"
              aria-label="редактировать"
              onClick={handleEditProfileClick}></button>
          </div>
          <p class="profile__about">исследователь</p>
        </div>
        <button
          class="profile__add-button"
          type="button"
          aria-label="добавить"
          onClick={handleAddPlaceClick}></button>
      </section>

      <ul class="elements"></ul>
    </main>
  );
}

export default Main;
