import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [formValues, setFormValues] = useState({
    title: {
      value: "",
      error: "",
      isValid: true,
    },
    link: {
      value: "",
      error: "",
      isValid: true,
    },
  });

  useEffect(() => {
    setFormValues({
      title: {
        value: "",
        error: "",
        isValid: true,
      },
      link: {
        value: "",
        error: "",
        isValid: true,
      },
    });
  }, [isOpen]);

  function handleChange(evt) {
    const {
      name,
      value,
      validity: { valid },
      validationMessage,
    } = evt.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: { value, isValid: valid, error: validationMessage },
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ title: formValues.title.value, link: formValues.link.value });
  }

  return (
    <PopupWithForm
      name="add-element"
      title="Новое место"
      acceptMessage="Создать"
      onClose={onClose}
      isOpened={isOpen}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={formValues.title.isValid && formValues.link.isValid}>
      <input
        className={`popup__input popup__input_type_card-title ${
          !formValues.title.isValid && "popup__input_invalid"
        }`}
        type="text"
        name="title"
        placeholder="Название"
        id="title-input"
        minLength="2"
        maxLength="30"
        required
        onChange={handleChange}
        value={formValues.title.value}
      />
      <span
        className={`popup__input-error title-input-error ${
          !formValues.title.isValid && "popup__input-error_visible"
        }`}>
        {formValues.title.error}
      </span>
      <input
        className={`popup__input popup__input_type_image-link ${
          !formValues.link.isValid && "popup__input_invalid"
        }`}
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        id="link-input"
        required
        onChange={handleChange}
        value={formValues.link.value}
      />
      <span
        className={`popup__input-error link-input-error ${
          !formValues.link.isValid && "popup__input-error_visible"
        }`}>
        {formValues.link.error}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
