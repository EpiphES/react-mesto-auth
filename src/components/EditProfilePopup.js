import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");

  useEffect(() => {
    setName(currentUser && currentUser.name);
    setDescription(currentUser && currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
    if (evt.target.validity.valid) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
      setNameErrorMessage(evt.target.validationMessage);
    }
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
    if (evt.target.validity.valid) {
      setIsDescriptionValid(true);
    } else {
      setIsDescriptionValid(false);
      setDescriptionErrorMessage(evt.target.validationMessage);
    }
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
      isLoading={isLoading}
      isValid={isNameValid && isDescriptionValid}>
      <input
        className={`popup__input popup__input_type_name ${
          !isNameValid && "popup__input_invalid"
        }`}
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
      <span
        className={`popup__input-error name-input-error ${
          !isNameValid && "popup__input-error_visible"
        }`}>
        {nameErrorMessage}
      </span>
      <input
        className={`popup__input popup__input_type_about ${
          !isDescriptionValid && "popup__input_invalid"
        }`}
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
      <span
        className={`popup__input-error about-input-error ${
          !isDescriptionValid && "popup__input-error_visible"
        }`}>
        {descriptionErrorMessage}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
