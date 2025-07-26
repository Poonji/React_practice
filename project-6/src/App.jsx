import { use, useEffect, useState } from 'react'
import './App.css'
// in this we are learning useEffect
function App() { 
const[count, setCount]=useState(0);
const[total, setTotal]=useState(1);

//variation:1
//runs on every render(before)
//useEffect(()=>{
  //alert("I will run on each render")
//})

//variation:2
//that runs on only first render
//useEffect(()=>{
  //alert("i will run on only 1st render");
//},[])

//variation:3
// useEffect(()=>
// {
//   alert("i will run every time when count is updated");
// },[count])

//variation:4
// multiple dependencies 
// useEffect(()=>
// {
//  alert("i will run every time when count/total is updated");
// },[count,total])


//variation 5
//add a cleanup function
useEffect(()=>
{
 alert("i will run every time when count/total is updated");
 },[count])



function handleClick(){
  setCount(count+1);
  setTotal(total+1);
}

function handleClickTotal()
{
  setTotal(total+1);
}

  return (
    <div>
      <button onClick={handleClick}>
        Update Count
      </button>
      <br/>
      count is:{count}
      <br/>
       <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br/>
      Total is:{total}
    </div>
  )
}

export default App
