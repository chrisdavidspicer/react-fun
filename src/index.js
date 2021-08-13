import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Lines extends React.Component {
  render() {
    return (
      <div>
        This is the lines component.
      </div>
    )
  }
}

class Board extends React.Component {
  render() {
    return (
      <div>
        This is the board component.
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div>
        Let's make a line game.
        <Board />
        <Lines />
      </div>
    )
  }
}

ReactDOM.render(
    <Game />,
  document.getElementById('root')
);