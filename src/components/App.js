import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupState(true);
  }

  const [isEditProfilePopupOpen, setEditProfilePopupState] =
    React.useState(false);

  const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);

  const [isEditAvatarPopupOpen, setEditAvatarPopupState] =
    React.useState(false);

  return (
    <body className="page">
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
      </div>

      {/* <div className="popup popup_type_profile">
        <div className="popup__content">
          <button
            className="popup__close-button"
            type="button"
            aria-label="закрыть"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="profile-form" noValidate>
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
            <button
              className="popup__submit-button"
              type="submit"
              aria-label="сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </div> */}

      <div className="popup popup_type_add-element">
        <div className="popup__content">
          <button
            className="popup__close-button"
            type="button"
            aria-label="закрыть"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="add-element-form" noValidate>
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
            <button
              className="popup__submit-button"
              type="submit"
              aria-label="создать">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__content">
          <button
            className="popup__close-button"
            type="button"
            aria-label="закрыть"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="avatar-form" noValidate>
            <input
              className="popup__input popup__input_type_avatar-link"
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              id="avatar-input"
              required
            />
            <span className="popup__input-error avatar-input-error"></span>
            <button
              className="popup__submit-button"
              type="submit"
              aria-label="сохранить">
              Сохранить
            </button>
          </form>
        </div>
      </div>

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
    </body>
  );
}

export default App;
