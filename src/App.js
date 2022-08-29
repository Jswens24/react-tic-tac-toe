import logo from './logo.svg';
import './App.css';
import Square from './components/Square';
import React, { useState } from 'react';

function App() {
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState(true);

  return (
    <div className="App">
      <Square
        squares={squares}
        setSquares={setSquares}
        player={player}
        setPlayer={setPlayer}
      />
    </div>
  );
}

export default App;
