import { lazy } from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const NavigationStatus = lazy(() => import('../../../containers/navigationStatus'));
const TextAreaComponent = lazy(() => import('../../../components/TextAreaComponent'));
const HeaderComponent = lazy(() => import('../../../components/HeaderComponent'));

const TextAreaExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Components")}
                childRoute={t("Textarea")}
            />
            <HeaderComponent className={styles.heading} title={t("Textarea")} />
            <div className={styles.commonContainer}>
                <TextAreaComponent
                    placeholder={t("Address")}
                    textAreaContainerClassName={styles.textAreaContainer}
                    textAreaInputClassName={styles.textAreaInput}
                />
            </div>
        </div>
    )
}

export default TextAreaExample;