import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MemoryMuse</div>
      <div className={styles.text}>
      MemoryMuse © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
