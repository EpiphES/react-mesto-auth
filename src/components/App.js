import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);

  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);

  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupState(true);
  }

  function closeAllPopups(evt) {
    if (evt.target === evt.currentTarget) {
      setEditAvatarPopupState(false);
      setEditProfilePopupState(false);
      setAddPlacePopupState(false);
    }
  }

  return (
    <div className="page__container">
      <Header />
      <Main
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        acceptMessage="Сохранить"
        onClose={closeAllPopups}
        isOpened={isEditProfilePopupOpen}>
        <input
          className="popup__input popup__input_type_name"
          type="text"
          name="name"
          id="name-input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error name-input-error"></span>
        <input
          className="popup__input popup__input_type_about"
          type="text"
          name="about"
          id="about-input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error about-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add-element"
        title="Новое место"
        acceptMessage="Создать"
        onClose={closeAllPopups}
        isOpened={isAddPlacePopupOpen}>
        <input
          className="popup__input popup__input_type_card-title"
          type="text"
          name="title"
          placeholder="Название"
          id="title-input"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error title-input-error"></span>
        <input
          className="popup__input popup__input_type_image-link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          id="link-input"
          required
        />
        <span className="popup__input-error link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        acceptMessage="Сохранить"
        onClose={closeAllPopups}
        isOpened={isEditAvatarPopupOpen}>
        <input
          className="popup__input popup__input_type_avatar-link"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          id="avatar-input"
          required
        />
        <span className="popup__input-error avatar-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        acceptMessage="Да"
        onClose={closeAllPopups}
        // isOpened={isConfirmPopupOpen}
      />

      <ImagePopup />

      <template className="elements__template">
        <li className="elements__item">
          <img src="/" alt=" " className="elements__photo" />
          <button
            className="elements__delete"
            type="button"
            aria-label="удалить"></button>
          <div className="elements__caption">
            <h2 className="elements__title"></h2>
            <div className="elements__like-group">
              <button
                className="elements__like-button"
                type="button"
                aria-label="нравится"></button>
              <span className="elements__like-count"></span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
