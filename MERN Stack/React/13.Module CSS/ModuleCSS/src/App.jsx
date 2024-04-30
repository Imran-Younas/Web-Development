import { useState } from "react"
import style from './Button.module.css'

function App() {

  let [showText, setText] = useState(false)


  return (
    <>

      <p className={style.error}>Error Msg</p>
      <button onClick={() => setText(!showText)}>{showText ? 'Hide Text' : 'Show Text'}</button>
      {showText
        ?
        <p>Hello I am Show Text</p>
        :
        ''
      }

    </>
  )
}

export default App
