import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isLinkValid, setIsLinkValid] = useState(true);
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [linkErrorMessage, setLinkErrorMessage] = useState("");

  function handleTitleChange(evt) {
    setTitle(evt.target.value);
    if (evt.target.validity.valid) {
      setIsTitleValid(true);
    } else {
      setIsTitleValid(false);
      setTitleErrorMessage(evt.target.validationMessage);
    }
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
    if (evt.target.validity.valid) {
      setIsLinkValid(true);
    } else {
      setIsLinkValid(false);
      setLinkErrorMessage(evt.target.validationMessage);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ title, link });
  }

  return (
    <PopupWithForm
      name="add-element"
      title="Новое место"
      acceptMessage="Создать"
      onClose={onClose}
      isOpened={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}>
      <input
        className={`popup__input popup__input_type_card-title ${
          !isTitleValid && "popup__input_invalid"
        }`}
        type="text"
        name="title"
        placeholder="Название"
        id="title-input"
        minLength="2"
        maxLength="30"
        required
        onChange={handleTitleChange}
        value={title}
      />
      <span
        className={`popup__input-error title-input-error ${
          !isTitleValid && "popup__input-error_visible"
        }`}>
        {titleErrorMessage}
      </span>
      <input
        className={`popup__input popup__input_type_image-link ${
          !isLinkValid && "popup__input_invalid"
        }`}
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        id="link-input"
        required
        onChange={handleLinkChange}
        value={link}
      />
      <span
        className={`popup__input-error link-input-error ${
          !isLinkValid && "popup__input-error_visible"
        }`}>
        {linkErrorMessage}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
