import { useState } from "react"


function App() {

  let [showPassword, setPassword] = useState(false)


  return (
    <>
      <input type={showPassword ? 'text' : 'password'} />
      <button onClick={() => setPassword(!showPassword)}> {showPassword ? 'Hide' : 'Show'} </button>
    </>
  )
}

export default App
