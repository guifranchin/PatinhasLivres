import logo from "../../assets/logo.svg";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt="Patinhas Livres"></img>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#SobreNos">Sobre</a>
        <a href="#Parceiros">Parceiros</a>
        <a href="#Contato">Contato</a>
      </nav>
      <a className={styles.cadastro}>Cadastro</a>
    </header>
  );
};
