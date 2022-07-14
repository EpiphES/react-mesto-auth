import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarInput = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({ avatar: avatarInput.current.value });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      acceptMessage="Сохранить"
      onClose={onClose}
      isOpened={isOpen}
      onSubmit={handleSubmit}>
      <input
        className="popup__input popup__input_type_avatar-link"
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        id="avatar-input"
        required
        ref={avatarInput}
      />
      <span className="popup__input-error avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
