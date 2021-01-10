import React from 'react';

import './card.css';

const randomImageUrl = id => `https://robohash.org/${ id }?set=set2&size=180x180`;

const Card = props => (
  <article className="card">
    <img
      className="card__image"
      alt="monster"
      src={ randomImageUrl(props.item.id) }
    ></img>
    <span className="card__name">{ props.item.name }</span>
    <span className="card__email">{ props.item.email }</span>
  </article>
);

export default Card;
