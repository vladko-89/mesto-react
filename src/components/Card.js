import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="cards__item" key={props.key}>
      <article className="card">
        <img onClick={handleClick} src={props.card.link} className="card__image" alt="Изображение карточки" />
        <button className="card__delete" type="button" aria-label="Кнопка удалить"></button>
        <div className="card__container">
          <h2 className="card__title">{props.card.name} </h2>
          <div className="card__likes-container">
            <button className="card__like" type="button" aria-label="Кнопка like">
            </button>
            <p className="card__likes-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;