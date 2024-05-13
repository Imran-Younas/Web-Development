import styles from "./ButtonContainer.module.css"

const ButtonContiner = ({ onclick }) => {

  let ButtonArray = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  return (
    <div className={styles.buttonContainer}>
      {ButtonArray.map((buttons) => (
        <button key={buttons} className={styles.button} onClick={() => onclick(buttons)}>{buttons}</button>

      ))}

    </div>
  );
}

export default ButtonContiner;