import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const[name, setName]=useState('');

  return (
    <div>
      < Card name={name} setName={setName}/>
      <h1>I am inside parent and the value is {name}</h1>
    </div>
  )
}

export default App
