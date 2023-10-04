import { useTranslation } from "react-i18next";
import ToastComponent from "../../../components/ToastComponent";
import Navigation from "../../../containers/Navigation";
import Sidebar from "../Sidebar";
import Footer from "../../../containers/Footer";
import '../styles/Common.css';
import { useState } from "react";
import ButtonComponent from "../../../components/ButtonComponent";

const ToastExample: React.FC = () => {
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
            <h1 className="heading">{t("Toast")}</h1>
            <div className="commonContainer">
                <div className="toastContainer">
                    <ButtonComponent label={t("Click")} onClick={handleClick}/>
                    <ToastComponent position="top-end" toasts={[
                        {header: "Toast", message: "This is a toast", variant: "primary", show: showAlert, onClose: closeAlert},
                        {header: "Toast", message: "This is a toast", variant: "danger", show: showAlert, onClose: closeAlert}
                    ]}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ToastExample;