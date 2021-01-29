import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard({ ...selectedCard, isOpen: true, el: card });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function CloseAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={CloseAllPopups} className="popup popup_type_profile" name="profile" title="Редактировать профиль" buttonText="Сохранить">
          <ul className="popup__list">
            <li className="popup__item">
              <input className="popup__input popup__input_item_name" id="input_name" type="text" name="user" required
                placeholder="Ваше имя" minLength="2" maxLength="40" />
              <span className="popup__error" id="input_name-error"></span>
            </li>
            <li className="popup__item">
              <input className="popup__input popup__input_item_specialization" type="text" name="specialization"
                id="input_pass" required placeholder="Профессия" minLength="2" maxLength="200" />
              <span className="popup__error" id="input_pass-error"></span>
            </li>
          </ul>
        </PopupWithForm>
        <PopupWithForm className="popup popup_type_new-card" name="new-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={CloseAllPopups}>
          <ul className="popup__list">
            <li className="popup__item">
              <input className="popup__input popup__input_item_title" type="text" name="name" id="input_title" required
                placeholder="Название" minLength="2" maxLength="30" />
              <span className="popup__error" id="input_title-error">ERROR</span>
            </li>
            <li className="popup__item">
              <input className="popup__input popup__input_item_path" type="url" id="input_link" name="link" required
                placeholder="Ссылка на картинку" />
              <span className="popup__error" id="input_link-error"></span>
            </li>
          </ul>
        </PopupWithForm>
        <PopupWithForm className="popup popup_type_card-delete" name="card-delete" title="Вы уверены?" buttonText="Да" />

        <ImagePopup card={selectedCard} onClose={CloseAllPopups} />

        <PopupWithForm className="popup popup_type_avatar" name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={CloseAllPopups}>
          <ul className="popup__list">
            <li className="popup__item">
              <input className="popup__input popup__input_item_path" type="url" id="input_avatar" name="link" required
                placeholder="Ссылка аватара" />
              <span className="popup__error" id="input_avatar-error"></span>
            </li>
          </ul>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
