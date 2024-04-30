import { useState } from 'react'

import AlertMsg from './Components/AlertMsg'
import PermertizeEventHandling from './Components/PermertizeEventHandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <AlertMsg></AlertMsg>
      <PermertizeEventHandling></PermertizeEventHandling>



    </>
  )
}

export default App
