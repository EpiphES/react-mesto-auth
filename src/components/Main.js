import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  const cardsElements = cards.map((item) => {
    console.log(item);
    return (
      <li key={item._id}>
        <Card card={item} onCardClick={onCardClick} />
      </li>
    );
  });

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

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
