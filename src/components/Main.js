import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  const cardsElements = cards.map((item) => {
    return (
      <li key={item._id}>
        <Card
          card={item}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
        />
      </li>
    );
  });

  return (
    <main className="content">
      <section className="profile">
        <a
          href="#"
          className="profile__avatar"
          onClick={onEditAvatar}
          style={{
            backgroundImage: `url(${currentUser && currentUser.avatar})`,
          }}></a>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{currentUser && currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать"
              onClick={onEditProfile}></button>
          </div>
          <p className="profile__about">{currentUser && currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить"
          onClick={onAddPlace}></button>
      </section>

      <ul className="elements">{cardsElements}</ul>
    </main>
  );
}

export default Main;
