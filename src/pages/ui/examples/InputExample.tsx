import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const Sidebar = React.lazy(() => import('../Sidebar'));
const Navigation = React.lazy(() => import('../../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../../containers/footer/Footer'));
const InputComponent = React.lazy(() => import('../../../components/InputComponent'));

const InputExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Input")}</h1>
            <div className={styles.commonContainer}>
                <InputComponent inputClassName={styles.inputElement} inputContainerClassName={styles.inputContainer} />
            </div>
            <Footer />
        </div>
    )
}

export default InputExample;