import React from "react";

import styles from "./Footer.module.css";
import Logo from "../../assets/img/logo.png";
import Twitter from "../../assets/decorations/footer/twitter.svg"
import Telegram from "../../assets/decorations/footer/telegram.svg"
import Medium from "../../assets/decorations/footer/mastodon.svg"
import Globe from "../../assets/decorations/footer/globe.svg"
import Github from "../../assets/decorations/footer/github.svg"
import Docs from "../../assets/decorations/footer/book.svg"

const Footer = (props) => {
  return (
    <footer className={`${styles.footer}`}>
      <img src={Logo} alt="logo" className={`${styles.logoProfile}`} />
      <img src={Twitter} alt="logo" className={`${styles.logo}`} />
      <img src={Telegram} alt="logo" className={`${styles.logo}`} />
      <img src={Medium} alt="logo" className={`${styles.logo}`} />
      <img src={Github} alt="logo" className={`${styles.logo}`} />
      <img src={Docs} alt="logo" className={`${styles.logo}`} />
      <img src={Globe} alt="logo" className={`${styles.logoGlobe}`} />


    </footer>
  );
};

export default Footer;
