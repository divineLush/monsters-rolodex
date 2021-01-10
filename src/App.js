import React, { Component } from 'react';
import CardList from './components/card-list/card-list.jsx';
import SearchBox from './components/search-box/search-box.jsx';
import Header from './components/header/header.jsx';

import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters: [
        { name: 'Freddy' },
        { name: 'Jason' },
        { name: 'Michael' },
        { name: 'Pinhead' },
      ],
      searchField: '',
    }

    // this.onSearchBoxChange = this.onSearchBoxChange.bind(this);
  }

  componentDidMount () {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(res => res.json())
      .then(monsters => this.setState({ monsters }))
  }

  filteredMonsters () {
    const { monsters, searchField } = this.state;

    return monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  }

  // arrow functions automatically get lexical scope
  onSearchBoxChange = (event) => {
    const searchField = event.target.value;
    const callback = () => console.log('setStateCallback', this.state);
    // setState is async
    this.setState({ searchField }, callback);
  }

  render () {
    return (
      <div className="App">
        <Header />
        <SearchBox
          placeholder="search monsters"
          onChange={ this.onSearchBoxChange }
        />
        <CardList items={ this.filteredMonsters() } />
      </div>
    );
  }
}

export default App;
