import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const Sidebar = React.lazy(() => import('../Sidebar'));
const Navigation = React.lazy(() => import('../../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../../containers/footer/Footer'));
const ToggleSwitchComponent = React.lazy(() => import('../../../components/ToggleSwitchComponent'));

const ToggleSwitchExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("ToggleSwitch")}</h1>
            <div className={styles.commonContainer}>
                <ToggleSwitchComponent
                    label={t("MySwitch")}
                    onChange={() => {}}
                    className={styles.toggleSwitch}
                />
            </div>
            <Footer />
        </div>
    )
}

export default ToggleSwitchExample;