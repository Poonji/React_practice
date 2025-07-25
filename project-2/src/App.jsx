import UserCard from "./components/UserCard"
import poopic from "./assets/poopic.jpg"
import reacts from "./assets/react.svg"
import wallpaper from "./assets/wallpaper.png"

function App() {


  return (
    <div className="container" >
      <UserCard name="poonji" desc="xyz" img={poopic} style={{"border-radius":"100px"}}/>
      <UserCard name="prajjwal"desc="abc"img={reacts} style={{"border-radius":"100px"}}/>
      <UserCard name="proper"desc="123"img={wallpaper} style={{"border-radius":"100px"}}/>
    </div>
  )
}

export default App
