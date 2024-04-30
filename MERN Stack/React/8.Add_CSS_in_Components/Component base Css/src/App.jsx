import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './Comonents/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      <Header></Header>

      <h1 className='text-blue-900 text-[40px]'>Welcome Tailwind</h1>

    </>
  )
}

export default App
