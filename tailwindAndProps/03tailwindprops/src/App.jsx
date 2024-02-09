import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Annas",
    age: 20 
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username = "Props using " btnText= "Touch  me"someobj={myObj} />
      <Card username="Annas" btnText= "Click me"/>
      <Card username="Khalid" btnText= "visit  me"/>
      <Card />
      <Card />
    </>
  )
}

export default App
