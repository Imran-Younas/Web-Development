import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  let text = '';
  let [showtext, settext] = useState(false);

  if (showtext == false) {
    text = '';
  }

  else {
    text = 'Welcome To React Development';
  }


  return (
    <>

      {text}
      <button onClick={() => settext(!showtext)}>Click me</button>


    </>
  )
}

export default App
