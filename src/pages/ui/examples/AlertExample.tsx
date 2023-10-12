import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const Sidebar = React.lazy(() => import('../Sidebar'));
const Navigation = React.lazy(() => import('../../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../../containers/footer/Footer'));
const AlertComponent = React.lazy(() => import('../../../components/AlertComponent'));

const AlertExample: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Alert")}</h1>
            <div className={styles.commonContainer}>
                <AlertComponent message={t("Thisisanalertexample")} dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="secondary" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="danger" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="success" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="warning" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="info" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="light" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="dark" dismissible={false}/>
            </div>
            <Footer />
        </div>
    )
}

export default AlertExample;