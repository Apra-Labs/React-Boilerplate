import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
import '../styles/styles.css';
const InputFloatingLabelComponent = React.lazy(() => import('../../../components/InputFloatingLabelComponent'));
const HeaderComponent = React.lazy(() => import('../../../components/HeaderComponent'));

const InputFloatingLabelExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <HeaderComponent className={styles.heading} title={t("InputFloatingLabel")} />
            <div className={styles.commonContainer}>
                <InputFloatingLabelComponent
                    label={t("EmailAddress")}
                    classNameFloatingContainer={styles.floatingInputContainer}
                    classNameFloatingInput={styles.floatingInput}
                    placeholder="Enter your email address"
                    type="email"
                />
            </div>
        </div>
    )
}

export default InputFloatingLabelExample;