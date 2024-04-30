import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [showModel, setModel] = useState(false);


  return (
    <>

      <button className='en' onClick={() => setModel(true)}>Enquiry Now</button>
      <div className={`modelOverLay ${showModel ? `modelshow` : ''} `}></div>
      <div className={`ModelDiv ${showModel ? `showModelDiv` : ''} `}>

        <h3 className='entext'>
          Enquairy Now
          <span onClick={() => setModel(false)}> &times; </span>
          <br />
          <input type="text" />
        </h3>

      </div>
    </>
  )
}

export default App
