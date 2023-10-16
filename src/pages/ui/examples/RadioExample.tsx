import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
import { useCallback, useState } from "react";
import '../styles/styles.css';
const ButtonComponent = React.lazy(() => import('../../../components/ButtonComponent'));
const ToastComponent = React.lazy(() => import('../../../components/ToastComponent'));
const RadioComponent = React.lazy(() => import('../../../components/RadioComponent'));
const HeaderComponent = React.lazy(() => import('../../../components/HeaderComponent'));
const NavigationStatus =  React.lazy(() => import('../../../containers/navigationStatus'));

const RadioExample: React.FC = () => {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [option, setOption] = useState<string>('');

    const { t } = useTranslation();

    const closeAlert = useCallback(() => {
        setShowAlert(false);
    },[]);

    const handleOnChange = useCallback((e: any) => {
        setOption(e.target.value);
    },[]);

    const handleOnClick = useCallback(() => {
        setShowAlert(true);
    },[]);

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Components")}
                childRoute={t("Radio")}
            />
            <HeaderComponent className={styles.heading} title={t("Radio")} />
            <div className={styles.commonContainer}>
                <ToastComponent position="top-end" messages={[
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
                <RadioComponent name="myoption" label={t("Option1")} onChange={handleOnChange} className={styles.checkbox} value="option 1" />
                <RadioComponent name="myoption" label={t("Option2")} onChange={handleOnChange} className={styles.checkbox} value="option 2" />
                <RadioComponent name="myoption" label={t("Option3")} onChange={handleOnChange} className={styles.checkbox} value="option 3" />
                <ButtonComponent label="Submit" onClick={handleOnClick} />
            </div>
        </div>
    )
}

export default RadioExample;