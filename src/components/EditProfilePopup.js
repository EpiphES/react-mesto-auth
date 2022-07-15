import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser && currentUser.name);
    setDescription(currentUser && currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      acceptMessage="Сохранить"
      onClose={onClose}
      isOpened={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}>
      <input
        className="popup__input popup__input_type_name"
        type="text"
        name="name"
        id="name-input"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        onChange={handleNameChange}
        value={name || ""}
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
        onChange={handleDescriptionChange}
        value={description || ""}
      />
      <span className="popup__input-error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
