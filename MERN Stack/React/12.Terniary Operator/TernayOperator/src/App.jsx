import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  let [showtext, settext] = useState(false);

  return (
    <>

      <button onClick={() => settext(!showtext)}> {showtext ? 'Hide Me' : 'Show Me'}</button>

      {
        showtext
          ?
          <p>Hello I am ternary Operator</p>
          :
          ''
      }




    </>
  )
}

export default App
