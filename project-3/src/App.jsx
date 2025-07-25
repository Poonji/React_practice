import React, { useState } from 'react'; //
import './App.css';
import Button from './components/TempButton';
import Card from './components/Card'; 

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button incrementCount={handleClick} text="Click me">
        <h1>{count}</h1>
      </Button>

      {/* Optional Card usage */}
      {/*
        <Card name="Poonji">
          <h1>Poonji is a good girl</h1>
          <p>Trying so hard to survive</p>
          <p>She loves a boy who is so cute</p>
        </Card>
      */}
    </div>
  );
}

export default App;
