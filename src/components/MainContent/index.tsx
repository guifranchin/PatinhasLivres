import styles from "./index.module.css";
import pug from "../../assets/pug.png";
import crown from "../../assets/crown.png";
import arrow from "../../assets/arrow.svg";
import big_bubbles from "../../assets/bubbles/big_bubbles.svg";

export const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.left_div}>
          <div className={styles.main_col}>
            <h1 className={styles.p}>
              <p>A adoção de animais é</p>
              <p>uma oportunidade de</p>
              <p>mudar vidas.</p>
            </h1>
            <div className={styles.bt}>
              <div>
                <button className={styles.button}>Mudar a vida de um PET</button>
              </div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>        
        </div>
        <div className={styles.img_div}>
          <img className={styles.crown} src={crown} alt="crown" />
          <img className={styles.pug} src={pug} alt="pug"/>
        </div>
      </div>
      <div>
        <img className={styles.big_bubbles} src={big_bubbles}/>
      </div>
    </main>
  );
};