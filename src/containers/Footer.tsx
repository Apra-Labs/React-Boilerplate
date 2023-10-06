import styles from "./styles/Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footerContainer} role="myFooter">
            <p className={styles.footerTitle}>Apra Labs &copy; 2023</p>
        </footer>
    )
}

export default Footer;