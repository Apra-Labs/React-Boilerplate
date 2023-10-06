import AlertComponent from "../../../components/AlertComponent";
import Sidebar from "../Sidebar";
import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';

const AlertExample: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Alert")}</h1>
            <div className={styles.commonContainer}>
                <AlertComponent message={t("Thisisanalertexample")} /> 
                <AlertComponent message={t("Thisisanalertexample")} variant="secondary"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="danger"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="success"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="warning"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="info"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="light"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="dark"/> 
            </div>
            <Footer />
        </div>
    )
}

export default AlertExample;