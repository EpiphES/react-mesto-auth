import React from "react";

function Main() {
  return (
    <main class="content">
      <section class="profile">
        <a href="#" class="profile__avatar"></a>
        <div class="profile__info">
          <div class="profile__title">
            <h1 class="profile__name">Жак-Ив Кусто</h1>
            <button
              class="profile__edit-button"
              type="button"
              aria-label="редактировать"></button>
          </div>
          <p class="profile__about">исследователь</p>
        </div>
        <button
          class="profile__add-button"
          type="button"
          aria-label="добавить"></button>
      </section>

      <ul class="elements"></ul>
    </main>
  );
}

export default Main;
