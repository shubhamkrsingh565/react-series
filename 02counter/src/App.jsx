import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    counter += 1
    if(counter >= 0 && counter <= 20)
      setCounter(counter)
    console.log("clicked", counter);
  }

  const removeValue = () => {
    counter -= 1
    if(counter >= 0)
      setCounter(counter)
    console.log("clicked", counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>  <br/>
      <button onClick={removeValue}>Remove value {counter} </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
