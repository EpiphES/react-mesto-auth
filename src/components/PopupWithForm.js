import React from "react";

function PopupWithForm(props) {
  return (
    <div classNameName={`popup popup_type_${props.name}`}>
      <div className="popup__content">
        <button
          className="popup__close-button"
          type="button"
          aria-label="закрыть"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.name}-form`} novalidate>
          {props.children}
          <button
            className="popup__submit-button"
            type="submit"
            aria-label="сохранить">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
