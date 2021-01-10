import React from 'react';

import './card.css';

const randomImageUrl = id => `https://robohash.org/${ id }?set=set2&size=180x180`;

const Card = props => (
  <article className="card">
    <img alt="monster" src={ randomImageUrl(props.item.id) }></img>
    <span>{ props.item.name }</span>
    <span>{ props.item.email }</span>
  </article>
);

export default Card;
