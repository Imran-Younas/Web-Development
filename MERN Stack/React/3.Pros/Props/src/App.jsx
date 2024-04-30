import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsPage from './PropsPage'

function App() {
  const Number = 8;

  return (
    <>
      <PropsPage Number={Number}></PropsPage>
    </>
  )
}

export default App
