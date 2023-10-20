import { lazy } from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const InputComponent = lazy(() => import('../../../components/InputComponent'));
const HeaderComponent = lazy(() => import('../../../components/HeaderComponent'));
const NavigationStatus = lazy(() => import('../../../containers/navigationStatus'));

const InputExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Components")}
                childRoute={t("Input")}
            />
            <HeaderComponent className={styles.heading} title={t("Input")} />
            <div className={styles.commonContainer}>
                <InputComponent inputClassName={styles.inputElement} inputContainerClassName={styles.inputContainer} />
            </div>
        </div>
    )
}

export default InputExample;