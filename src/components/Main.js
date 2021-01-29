import React from 'react';
import editProfile from '../image/Vector.svg';
import api from '../utils/Api';
import icon from '../image/vectorAva.svg';
import Card from './Card';



function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <main className="main-index">
      <section className="profile">
        <div className="profile__flex-wrapper">
          <div className="profile__avatar-container" onClick={props.onEditAvatar}>
            <div className="profile__avatar-vector">
              <img src={icon} alt="Иконка" />
            </div>
            <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar" />
          </div>
          <div>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__button-edit" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}>
                <img src={editProfile} alt="Иконка" className="profile__vector" />
              </button>
            </div>
            <p className="profile__specialization">{userDescription} </p>
          </div>
        </div>
        <button className="profile__button-new-card" type="button" aria-label="Добавить новую карточку" onClick={props.onAddPlace}></button>
      </section>
      <section className="grid-container" aria-label="Блок с карточками">
        <ul className="cards">
          {cards.map((card) => (
            <Card key={card['_id']} card={card} onCardClick={props.onCardClick} />)
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;