import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [showMenu, setMenu] = useState(false)


  return (
    <>

      <button className='menuicon' onClick={() => setMenu(!showMenu)}>
        {
          showMenu
            ?
            <span> &times; </span>
            :
            <span> &#9776; </span>
        }
      </button>

      <div className={`menu ${showMenu ? 'avtiveMenu' : ''} `}>
        <ul >
          <li>Home</li>
          <li>Course</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>

  )
}

export default App
