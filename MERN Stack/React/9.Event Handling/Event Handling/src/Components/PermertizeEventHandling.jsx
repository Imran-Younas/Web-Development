function PermertizeEventHandling() {
  function add(num1, num2) {
    console.log(num1 + num2);
  }

  return (
    <button type="button" className="btn btn-danger" onClick={() => add(5, 6)}>Danger</button>
  )
}


export default PermertizeEventHandling;