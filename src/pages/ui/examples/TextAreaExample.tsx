import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const Sidebar = React.lazy(() => import('../Sidebar'));
const Navigation = React.lazy(() => import('../../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../../containers/footer/Footer'));
const TextAreaComponent = React.lazy(() => import('../../../components/TextAreaComponent'));

const TextAreaExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Textarea")}</h1>
            <div className={styles.commonContainer}>
                <TextAreaComponent
                    placeholder={t("Address")}
                    textAreaContainerClassName={styles.textAreaContainer}
                    textAreaInputClassName={styles.textAreaInput}
                />
            </div>
            <Footer />
        </div>
    )
}

export default TextAreaExample;