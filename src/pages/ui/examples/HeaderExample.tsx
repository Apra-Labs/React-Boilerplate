import { lazy } from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const NavigationStatus = lazy(() => import('../../../containers/navigationStatus'));
const HeaderComponent = lazy(() => import('../../../components/HeaderComponent'));

const HeaderExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Components")}
                childRoute={t("Myheader")}
            />
            <HeaderComponent className={styles.heading} title={t("Myheader")} />
        </div>
    )
}

export default HeaderExample;