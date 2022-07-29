import { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";
import * as auth from "../utils/auth.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import ConfirmationPopup from "./ConfirmationPopup";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Register from "./Register";

import successIcon from "../images/success.svg";
import failIcon from "../images/fail.svg";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [cardToDelete, setCardToDelete] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);

  const [isProfileFormLoading, setIsProfileLoading] = useState(false);
  const [isAvatarFormLoading, setIsAvatarFormLoading] = useState(false);
  const [isAddPlaceFormLoading, setIsAddPlaceFormLoading] = useState(false);
  const [isConfirmationFormLoading, setConfirmationFormLoading] =
    useState(false);

  const [registerMessage, setRegisterMessage] = useState(null);

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardClick({ src, title }) {
    setSelectedCard({ src, title });
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }
  function handleCardDelete(cardId) {
    setCardToDelete(cardId);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setCardToDelete(null);
    setRegisterMessage(null);
  }

  function handleUpdateUser({ name, about }) {
    setIsProfileLoading(true);
    api
      .submitProfileInfo({ name, about })
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsProfileLoading(false));
  }
  function handleUpdateAvatar({ avatar }) {
    setIsAvatarFormLoading(true);
    api
      .submitAvatar({ avatar })
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsAvatarFormLoading(false));
  }
  function handleAddPlaceSubmit({ title, link }) {
    setIsAddPlaceFormLoading(true);
    api
      .submitCard({ title, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsAddPlaceFormLoading(false));
  }
  function handleConfirmDeletion(cardId) {
    setConfirmationFormLoading(true);
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardId));
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setConfirmationFormLoading(false));
  }  

  function handleRegister({email, password}) {
    auth.register({email, password})
    .then((res) => {
      setRegisterMessage({
        icon: successIcon,
        text: "Вы успешно зарегистрировались!",
      });
      history.push("/sign-in");
    })
    .catch((err) => {
      setRegisterMessage({
        icon: failIcon,
        text: "Что-то пошло не так! Попробуйте ещё раз."
      })
      console.log(err);
    })
  }

  function handleLogin({ email, password }) {
    auth
      .authorize({ email, password })
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        setUserEmail(email);
        history.push("/");
      })
      .catch((err) => {
        setRegisterMessage({
          icon: failIcon,
          text: "Что-то пошло не так! Попробуйте ещё раз.",
        });
        console.log(err);
      });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    history.push("/sign-in");
  }

  function checkToken() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    auth
      .getContent(token)
      .then((res) => {
        setLoggedIn(true);
        setUserEmail(res.data.email);
        history.push("/");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    checkToken()
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header email={userEmail} onLogout={handleLogout}/>
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              component={Main}
              loggedIn={loggedIn}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
            <Route path="/sign-up">
              <Register onRegister={handleRegister} />
            </Route>
            <Route path="/sign-in">
              <Login onLogin={handleLogin}/>
            </Route>
            <Route>
              {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
            </Route>
          </Switch>
          <Footer />
        </div>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isProfileFormLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isAvatarFormLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isLoading={isAddPlaceFormLoading}
        />
        <ConfirmationPopup
          card={cardToDelete}
          onClose={closeAllPopups}
          onConfirmDeletion={handleConfirmDeletion}
          isLoading={isConfirmationFormLoading}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <InfoTooltip message={registerMessage} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
