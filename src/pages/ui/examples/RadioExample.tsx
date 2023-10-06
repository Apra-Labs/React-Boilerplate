import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import RadioComponent from "../../../components/RadioComponent";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../components/ButtonComponent";
import styles from '../styles/Common.module.css';
import { useCallback, useState } from "react";
import ToastComponent from "../../../components/ToastComponent";

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
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Radio")}</h1>
            <div className={styles.commonContainer}>
                <ToastComponent position="top-end" toastsArray={[
                    {
                        header: t("Radio") + ' ' + t("choosed"),
                        message: option,
                        show: showAlert,
                        onClose: closeAlert,
                        variant: "primary",
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
            <Footer />
        </div>
    )
}

export default RadioExample;