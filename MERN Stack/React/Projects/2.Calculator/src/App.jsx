import styles from "./App.module.css"
import Display from "./components/Display";
import ButtonContiner from "./components/ButtonContainer";
import { useState } from "react";

function App() {

  let [calVal, setVal] = useState("")

  const onButtonClick = (buttonText) => {

    if (buttonText === 'C') { setVal(""); }
    else if (buttonText === '=') {
      const result = eval(calVal);
      setVal(result);
    }
    else {
      const newVal = calVal + buttonText;
      setVal(newVal);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonContiner onclick={onButtonClick} ></ButtonContiner>

    </div>
  );
}

export default App;