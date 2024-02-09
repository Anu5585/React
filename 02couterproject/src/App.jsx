import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter ] =useState(0)


  // let counter = 15
  const addvalue = ()=>{
    counter = counter + 1
    setCounter(counter)

  }
const removeValue = ()=>{
  setCounter(counter-1)
  setCounter((prevCounter) => (prevCounter = 0 ? prevCounter - 1 : 0));

  
}
  return (
    <>
  <h1>Annas Project</h1>
  <h2>Conter Value : {counter}</h2>
  <button
  onClick= {addvalue}
  >Add value {counter}</button>
  <br />
  <button
  onClick={removeValue}
  >Remove value {counter}</button>
  <p>Footer: {counter}</p>

  
    </>
  )
}

export default App
