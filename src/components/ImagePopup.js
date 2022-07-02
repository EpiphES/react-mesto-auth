function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_image${
        card.isOpened ? " popup_opened" : ""
      }`}
      onClick={onClose}>
      <div className="popup__content popup__content_image">
        <button
          className="popup__close-button"
          type="button"
          aria-label="закрыть"
          onClick={onClose}></button>
        <figure className="popup__figure">
          <img src={card.src} alt={card.title} className="popup__image" />
          <figcaption className="popup__caption">{card.title}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
