import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("/");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
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
          style={{ backgroundImage: `url(${userAvatar})` }}></a>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать"
              onClick={onEditProfile}></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить"
          onClick={onAddPlace}></button>
      </section>

      <ul className="elements">
        {cards.map((item) => {
          return (
            <li key={item._id}>
              <Card
                src={item.link}
                title={item.name}
                likes={item.likes.length}
                onCardClick={onCardClick}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
