import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      acceptMessage="Сохранить"
      onClose={onClose}
      isOpened={isOpen}>
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
  );
}

export default EditProfilePopup;
