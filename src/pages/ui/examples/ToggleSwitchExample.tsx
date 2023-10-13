import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const ToggleSwitchComponent = React.lazy(() => import('../../../components/ToggleSwitchComponent'));
const HeaderComponent = React.lazy(() => import('../../../components/HeaderComponent'));

const ToggleSwitchExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <HeaderComponent className={styles.heading} title={t("ToggleSwitch")} />
            <div className={styles.commonContainer}>
                <ToggleSwitchComponent
                    label={t("MySwitch")}
                    onChange={() => {}}
                    className={styles.toggleSwitch}
                />
            </div>
        </div>
    )
}

export default ToggleSwitchExample;