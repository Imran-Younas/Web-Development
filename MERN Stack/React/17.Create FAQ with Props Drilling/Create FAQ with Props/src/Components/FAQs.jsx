import styles from './FAQs.module.css'

function FAQs() {
  return (
    <>
      <h1 className={styles.text}> Frequently Questions Asked(FAQs) </h1>
      <FrequentlyQuestionAnswers></FrequentlyQuestionAnswers>

      <div>

      </div>

    </>
  );
}

export default FAQs;

function FrequentlyQuestionAnswers() {
  return (

    <div className={styles.QA}>
      <h2>Hello</h2>
      <p>Imran</p>
    </div>

  );
}