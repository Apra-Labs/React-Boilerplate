import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import ButtonComponent from "../../../components/ButtonComponent";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';
import { useState } from "react";
import ToastComponent from "../../../components/ToastComponent";
import ToastContainerComponent from "../../../components/ToastContainerComponent";

const ButtonExample: React.FC = () => {
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const { t } = useTranslation();

    const closeAlert = () => {
        setShowAlert(false);
    }

    const handleClick = () => {
        setShowAlert(true);
    }

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Button")}</h1>
            <div className="commonContainer">
                <ToastContainerComponent position="top-end">
                    <ToastComponent
                        header={t("Button") + ' ' + t("Clicked")}
                        message={t("You") + ' ' + t("Clicked") + ' ' + t("Button")}
                        show={showAlert}
                        onClose={closeAlert}
                        variant="primary"
                        headerStyle={{ justifyContent: 'space-between' }}
                        messageStyle={{ color: 'white' }}
                    />
                </ToastContainerComponent>
                <div className="buttonContainer">
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="secondary" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="danger" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="success" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="warning" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="info" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="light" style={{ border: '0.1rem', borderStyle: 'solid' }} />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="dark" style={{ border: '0.1rem', borderStyle: 'solid', borderColor: 'white' }} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ButtonExample;