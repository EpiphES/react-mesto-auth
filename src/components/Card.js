function Card({ src, title, likes, onCardClick }) {
  function handleClick() {
    onCardClick({ src, title });
  }

  return (
    <li className="elements__item" onClick={handleClick}>
      <img src={src} alt={title} className="elements__photo" />
      <button
        className="elements__delete"
        type="button"
        aria-label="удалить"></button>
      <div className="elements__caption">
        <h2 className="elements__title">{title}</h2>
        <div className="elements__like-group">
          <button
            className="elements__like-button"
            type="button"
            aria-label="нравится"></button>
          <span className="elements__like-count">{likes}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;