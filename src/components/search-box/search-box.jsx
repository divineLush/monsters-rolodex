import React from 'react';

import './search-box.css';

const SearchBox = props => (
  <input
    className="search-box"
    type="search"
    name="name"
    id="name"
    placeholder={ props.placeholder }
    onChange={ props.onChange }
  />
);

export default SearchBox;
