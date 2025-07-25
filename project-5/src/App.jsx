import './App.css'

function App() {

  function handleClick(){
    alert("I am Clicked")
  }

  function hoverClick()
  {
    alert("Mouse has hovered")
  }
  return (
    <div>
      <p onMouseOver={hoverClick} style={{color:"red"}}>
        i am a paragraph
      </p>
    <button onClick={handleClick}>
      Click Me
    </button>
    </div>
  )
}

export default App
