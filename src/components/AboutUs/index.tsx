import styles from "./index.module.css";
import hearts from "../../assets/hearts.svg";
import afalou from "../../assets/afalou.png";

export const AboutUs = () => {
  return (
    <div id="SobreNos" className={styles.root}>
      <section className={styles.title}>
          <div className={styles.title_div}></div>
          <div className={styles.title_div}>
            <h2 className={styles.bubble_title}>Quem Somos?</h2>
          </div>
      </section>
      <section className={styles.content}>
        <div className={styles.row_1}>
          <div className={styles.col_1}>
            <p className={styles.text}>
              <pre>Somos uma</pre>
              <pre>organização sem fins</pre>
              <pre>lucrativos</pre>
            </p>
          </div>
          <div className={styles.col_2}>
            <img className={styles.hearts} src={hearts}/>
            <img className={styles.afalou} src={afalou}/>
          </div>
          <div className={styles.col_3}>
            <p className={styles.text}>
              <pre>A cada 10 reais doados</pre>
              <pre>1 animal é regatado</pre>
            </p>
          </div>
        </div>
        <div className={styles.row_2}>
          <p className={styles.text}>
            <pre>Ajudamos animais de estimação a</pre>
            <pre>encontrar um lar amoroso e responsável</pre>
          </p>
        </div>
      </section>
    </div>
  );
};
