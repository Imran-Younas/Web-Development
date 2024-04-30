function AlertMsg() {

  const ShowMsg = () => {
    alert("Hey I am Alert Msg");
  }

  return (
    <>

      <button type="button" className="btn btn-success" onClick={ShowMsg}>Show Msg</button>




    </>
  )
}

export default AlertMsg;