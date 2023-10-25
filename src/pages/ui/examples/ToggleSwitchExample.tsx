import { lazy } from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
import { useAppSelector } from "../../../redux/hooks";
const NavigationStatus = lazy(() => import('../../../containers/navigationStatus'));
const ToggleSwitchComponent = lazy(() => import('../../../components/ToggleSwitchComponent'));
const HeaderComponent = lazy(() => import('../../../components/HeaderComponent'));

const ToggleSwitchExample: React.FC = () => {
    const { t } = useTranslation();

    const currentLanguage = useAppSelector(state => state.langReducer.language);

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Components")}
                childRoute={t("ToggleSwitch")}
            />
            <HeaderComponent className={styles.heading} title={t("ToggleSwitch")} />
            <div className={styles.commonContainer}>
                <ToggleSwitchComponent
                    label={t("MySwitch")}
                    onChange={() => { }}
                    className={currentLanguage === 'عربي' ? "form-check-reverse"  : styles.toggleSwitch}
                    style={{fontSize: '1.5rem'}}
                />
            </div>
        </div>
    )
}

export default ToggleSwitchExample;