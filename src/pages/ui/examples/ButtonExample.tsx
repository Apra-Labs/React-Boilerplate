import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
import { useCallback, useState } from "react";
import '../styles/styles.css';
const Sidebar = React.lazy(() => import('../Sidebar'));
const Navigation = React.lazy(() => import('../../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../../containers/footer/Footer'));
const ButtonComponent = React.lazy(() => import('../../../components/ButtonComponent'));
const ToastComponent = React.lazy(() => import('../../../components/ToastComponent'));


const ButtonExample: React.FC = () => {
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const { t } = useTranslation();

    const closeAlert = useCallback(() => {
        setShowAlert(false);
    },[]);

    const handleClick = useCallback(() => {
        setShowAlert(true);
    },[]);

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Button")}</h1>
            <div className={styles.commonContainer}>
                <ToastComponent position="top-end" messages={[
                    {
                        header: "Button clicked",
                        message: "Button is clicked",
                        show: showAlert,
                        onClose: closeAlert,
                        variant: "primary",
                        className: "toast",
                        headerStyle: { justifyContent: 'space-between' }
                    }
                ]} />
                <div className={styles.buttonContainer}>
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="secondary" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="danger" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="success" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="warning" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="info" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="light" style={{ border: '0.1rem', borderStyle: 'solid' }} />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="dark" style={{ border: '0.1rem', borderStyle: 'solid', borderColor: 'white' }} />
                </div>

            </div>
            <h2 className={styles.heading}>{t("Outline") + ' ' + t("Button")}</h2>
            <div className={styles.commonContainer}>
                <div className={styles.buttonContainer}>
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="outline-primary" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="outline-secondary" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="outline-danger" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="outline-success" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="outline-warning" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="outline-info" />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="outline-light" style={{ color: 'gray' }} />
                    <ButtonComponent className={styles.button} label={t("Click")} onClick={handleClick} variant="outline-dark" style={{ border: '0.1rem', borderStyle: 'solid', borderColor: 'white', color: 'gray' }} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ButtonExample;