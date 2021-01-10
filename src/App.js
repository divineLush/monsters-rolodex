import React, { Component } from 'react';
import CardList from './components/card-list/card-list.jsx';
import SearchBox from './components/search-box/search-box.jsx';

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

  render () {
    return (
      <div className="App">
        <SearchBox
          placeholder="don't be shy..."
          onChange={ event => this.setState({ searchField: event.target.value }, () => console.log('setStateCallback', this.state)) }
        />
        <CardList items={ this.filteredMonsters() } />
      </div>
    );
  }
}

export default App;
