import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      title,
      link,
    });
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
        className="popup__input popup__input_type_card-title"
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
      <span className="popup__input-error title-input-error"></span>
      <input
        className="popup__input popup__input_type_image-link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        id="link-input"
        required
        onChange={handleLinkChange}
        value={link}
      />
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
