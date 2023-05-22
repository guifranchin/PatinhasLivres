import styles from "./index.module.css";
import discord_icon from "../../assets/discord_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import twitter_icon from "../../assets/twitter_icon.svg";

export const Footer = () => {
  return (
    <footer id="Contato" className={styles.footer}>
        <nav className={styles.nav}>
            <a href="#">Privacy Policy</a>
            <a href="#">Report a bug</a>
            <a href="#">Investor</a>
            <div className={styles.icons}>
                <a href=""><img src={twitter_icon} alt="twitter" /></a>
                <a href=""><img src={discord_icon} alt="discord" /></a>
                <a href=""><img src={github_icon} alt="github" /></a> 
            </div>
        </nav>
    </footer>
  );
};
