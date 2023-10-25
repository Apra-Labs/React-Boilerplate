import { lazy } from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
import { useCallback, useState } from "react";
import '../styles/styles.css';
import { useAppSelector } from "../../../redux/hooks";
const ButtonComponent = lazy(() => import('../../../components/ButtonComponent'));
const ToastComponent = lazy(() => import('../../../components/ToastComponent'));
const RadioComponent = lazy(() => import('../../../components/RadioComponent'));
const HeaderComponent = lazy(() => import('../../../components/HeaderComponent'));
const NavigationStatus = lazy(() => import('../../../containers/navigationStatus'));

const RadioExample: React.FC = () => {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [option, setOption] = useState<string>('');

    const { t } = useTranslation();

    const closeAlert = useCallback(() => {
        setShowAlert(false);
    }, []);

    const handleOnChange = useCallback((e: any) => {
        setOption(e.target.value);
    }, []);

    const handleOnClick = useCallback(() => {
        setShowAlert(true);
    }, []);

    const currentLanguage = useAppSelector(state => state.langReducer.language);

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Components")}
                childRoute={t("Radio")}
            />
            <HeaderComponent className={styles.heading} title={t("Radio")} />
            <div className={styles.commonContainer}>
                <ToastComponent position={currentLanguage === 'عربي' ? 'top-start' : 'top-end'} messages={[
                    {
                        header: t("Radio") + ' ' + t("Choosed"),
                        message: option,
                        show: showAlert,
                        onClose: closeAlert,
                        variant: "primary",
                        className: "toast",
                        headerStyle: { justifyContent: 'space-between' },
                        messageStyle: { color: 'white' }
                    }
                ]} />
                <h3>{t("SelectOptions")}</h3>
                <RadioComponent
                    name="myoption"
                    label={t("Option1")}
                    onChange={handleOnChange}
                    className={currentLanguage === 'عربي' ? "form-check-reverse" : styles.checkbox}
                    value="option 1"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />
                <RadioComponent
                    name="myoption"
                    label={t("Option2")}
                    onChange={handleOnChange}
                    className={currentLanguage === 'عربي' ? "form-check-reverse" : styles.checkbox}
                    value="option 2"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />
                <RadioComponent
                    name="myoption"
                    label={t("Option3")}
                    onChange={handleOnChange}
                    className={currentLanguage === 'عربي' ? "form-check-reverse" : styles.checkbox}
                    value="option 3"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />
                <ButtonComponent label="Submit" onClick={handleOnClick} />
            </div>
        </div>
    )
}

export default RadioExample;