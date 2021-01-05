import React, { Component } from 'react';
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
    }
  }

  render () {
    return (
      <div className="App">
        { this.state.monsters.map((monster, key) => <span key={ key }>{ monster.name }</span>) }
      </div>
    );
  }
}

export default App;
