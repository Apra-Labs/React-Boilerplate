import React from "react";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../components/ButtonComponent";
import styles from '../styles/Common.module.css';
import { useCallback, useState } from "react";
import '../styles/styles.css';
const NavigationStatus =  React.lazy(() => import('../../../containers/navigationStatus'));
const HeaderComponent = React.lazy(() => import('../../../components/HeaderComponent'));
const CheckBoxComponent = React.lazy(() => import('../../../components/CheckBoxComponent'));
const ToastComponent = React.lazy(() => import('../../../components/ToastComponent'));

const CheckBoxExample: React.FC = () => {
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
                subRoute={t("Card")}
            />
            <HeaderComponent className={styles.heading} title={t("Checkbox")} />
            <div className={styles.commonContainer}>
                <ToastComponent position="top-end" messages={[
                    {
                        header: t("Checkbox") + ' ' + t("Choosed"),
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
                <CheckBoxComponent label={t("Option1")} onChange={handleOnChange} className={styles.checkbox} value="option 1" />
                <CheckBoxComponent label={t("Option2")} onChange={handleOnChange} className={styles.checkbox} value="option 2" />
                <CheckBoxComponent label={t("Option3")} onChange={handleOnChange} className={styles.checkbox} value="option 3" />
                <ButtonComponent label="Submit" onClick={handleOnClick} />
            </div>
        </div>
    )
}

export default CheckBoxExample;