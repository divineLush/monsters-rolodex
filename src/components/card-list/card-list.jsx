import React from 'react';
import Card from '../card/card.jsx';

import './card-list.css';

const CardList = props => (
  <section className="card-list">
    { props.items
        .map((item, key) => (
          <Card className="card-list__item" key={ key } item={ item } />
        ))
    }
  </section>
);

export default CardList;
