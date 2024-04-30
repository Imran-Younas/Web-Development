import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parts from './Components/Parts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Parts>I am Header</Parts>
      <Parts>I am Body</Parts>
      <Parts>I am Footer</Parts>
    </>
  )
}

export default App
