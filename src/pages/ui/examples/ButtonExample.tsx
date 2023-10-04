import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import ButtonComponent from "../../../components/ButtonComponent";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';
import { useState } from "react";
import ToastComponent from "../../../components/ToastComponent";

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
                <ToastComponent position="top-end" toasts={[
                    {
                        header: "Button clicked",
                        message: "Button is clicked",
                        show: showAlert,
                        onClose: closeAlert,
                        variant: "primary",
                        headerStyle: { justifyContent: 'space-between' }
                    }
                ]} />
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
            <h2 className="heading">{t("Outline") + ' ' + t("Button")}</h2>
            <div className="commonContainer">
                <div className="buttonContainer">
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="outline-primary" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="outline-secondary" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="outline-danger" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="outline-success" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="outline-warning" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="outline-info" />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="outline-light" style={{ color: 'gray' }} />
                    <ButtonComponent className="button" label={t("Click")} onClick={handleClick} variant="outline-dark" style={{ border: '0.1rem', borderStyle: 'solid', borderColor: 'white', color: 'gray' }} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ButtonExample;