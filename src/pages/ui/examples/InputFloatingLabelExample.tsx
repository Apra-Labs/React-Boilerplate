import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
import '../styles/styles.css';
const Sidebar = React.lazy(() => import('../Sidebar'));
const Navigation = React.lazy(() => import('../../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../../containers/footer/Footer'));
const InputFloatingLabelComponent = React.lazy(() => import('../../../components/InputFloatingLabelComponent'));

const InputFloatingLabelExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("InputFloatingLabel")}</h1>
            <div className={styles.commonContainer}>
                <InputFloatingLabelComponent
                    label={t("EmailAddress")}
                    classNameFloatingContainer={styles.floatingInputContainer}
                    classNameFloatingInput={styles.floatingInput}
                    placeholder="Enter your email address"
                    type="email"
                />
            </div>
            <Footer />
        </div>
    )
}

export default InputFloatingLabelExample;