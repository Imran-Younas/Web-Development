import './Form.css'
import { useState } from 'react';

function Form() {


  let [todolist, settodolist] = useState([]);

  let saveTodoList = (event) => {
    let toname = event.target.toname.value;



    if (!todolist.includes(toname)) {
      let finaltodolist = [...todolist, toname]
      settodolist(finaltodolist)


    }

    else {

      alert('Item Already exist!!!')
    }


    event.preventDefault();
  }

  let list = todolist.map((value, index) => {

    return (
      <TodoListItem value={value} key={index} indexNumber={index}

        todolist={todolist}
        settodolist={settodolist}

      ></TodoListItem>
    )
  })


  return (
    <>
      <form onSubmit={saveTodoList} >
        <input type="text" name='toname' /> <button>Save</button>
      </form>

      {list}






    </>

  )
}

export default Form;

function TodoListItem({ value, indexNumber, todolist, settodolist }) {

  let deleteRow = () => {

    let finalData = todolist.filter((v, i) => i != indexNumber)
    settodolist(finalData)
  }

  return (


    <div className='outerdiv'>
      <ul>
        <li>  {value} <span onClick={deleteRow}> &times; </span></li>

      </ul>
    </div>

  );


}