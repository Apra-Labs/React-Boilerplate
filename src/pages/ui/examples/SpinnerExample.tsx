import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import SpinnerComponent from "../../../components/SpinnerComponent";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
import ButtonComponent from "../../../components/ButtonComponent";
import { useState } from "react";


const SpinnerExample: React.FC = () => {
    const [fullPage, setFullPage] = useState<boolean>(false);

    const { t } = useTranslation();

    const handleFullPage = () => {
        setFullPage(true);
        setTimeout(closeFullPage, 3000);
    }

    const closeFullPage = () => {
        setFullPage(false);
    }

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Spinner")}</h1>
            <h2 className={styles.heading}>{t("Spinner") + ' ' + t("with") + ' ' + t("border")}</h2>
            <div className={styles.commonContainer}>
                <SpinnerComponent animation="border" className={styles.spinner} />
                <SpinnerComponent animation="border" className={styles.spinner} variant="secondary" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="danger" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="success" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="warning" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="info" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="light" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="dark" />
            </div>
            <h2 className={styles.heading}>{t("Spinner") + ' ' + t("with") + ' ' + t("grow")}</h2>
            <div className={styles.commonContainer}>
                <SpinnerComponent animation="grow" className={styles.spinner} />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="secondary" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="danger" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="success" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="warning" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="info" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="light" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="dark" />
            </div>
            <h2 className={styles.heading}>{t("fullpage").charAt(0).toUpperCase() + t("fullpage").slice(1) + ' ' + t("Spinner")}</h2>
            <div className={styles.commonContainer}>
                <ButtonComponent
                    label={t("fullpage").charAt(0).toUpperCase() + t("fullpage").slice(1) + ' ' + t("Spinner")}
                    onClick={handleFullPage}
                    style={{ marginBottom: '2rem' }}
                />
                {fullPage && <SpinnerComponent animation="border" className={styles.spinner} fullPage={fullPage} />}
            </div>
            <Footer />
        </div>
    )
}

export default SpinnerExample;