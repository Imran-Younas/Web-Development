import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  function StateMang() {
    setCount(count + 1)
  }

  return (
    <>
      <button type="button" class="btn btn-info" onClick={StateMang}>Info</button>
      {count}
    </>
  )

}

export default App
