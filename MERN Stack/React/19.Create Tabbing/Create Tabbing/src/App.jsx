import { useState } from 'react'
import './App.css'
import tabs from './assets/Data.js'

function App() {
  // let [activetab, setactivetab] = useState(0)
  let [activecontent, setactivecontent] = useState(tabs[0])

  let changeData = (index) => {
    // setactivetab(index);
    setactivecontent(tabs[index])
  }

  return (
    <>
      <div className='Title'>
        <h1>Tabbing System</h1>
      </div>

      <div className="btn-list">
        <ul>
          {tabs.map((tabsItem, index) => {
            return (
              <li key={index}><button onClick={() => changeData(index)}>{tabsItem.title}</button></li>
            )

          })}

        </ul>



      </div>

      {activecontent != undefined ?
        <p>
          {activecontent.description}
        </p>
        :
        ''
      }




    </>
  )
}

export default App
