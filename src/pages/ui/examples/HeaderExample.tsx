import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const HeaderComponent = React.lazy(() => import('../../../components/HeaderComponent'));

const HeaderExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <HeaderComponent className={styles.heading} title={t("Myheader")}/>
        </div>
    )
}

export default HeaderExample;