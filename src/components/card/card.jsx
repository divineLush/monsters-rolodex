import React from 'react';

import './card.css';

const randomInteger = () => Math.floor(Math.random() * 101);
const randomImageUrl = () => `https://robohash.org/${ randomInteger() }?set=set2&size=180x180`;

const Card = props => (
  <article className="card">
    <img alt="monster" src={ randomImageUrl() }></img>
    <span>{ props.item.name }</span>
    <span>{ props.item.email }</span>
  </article>
);

export default Card;
