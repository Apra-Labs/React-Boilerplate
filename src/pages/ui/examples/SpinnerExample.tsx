import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import SpinnerComponent from "../../../components/SpinnerComponent";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';
import ButtonComponent from "../../../components/ButtonComponent";
import { useState } from "react";
import { CloseButton } from "react-bootstrap";


const SpinnerExample: React.FC = () => {
    const [fullPage, setFullPage] = useState<boolean>(false);

    const { t } = useTranslation();

    const handleFullPage = () => {
        setFullPage(true);
        setTimeout(closeFullPage, 3000);
    }

    const closeFullPage = () => {
        setFullPage(false);
    }

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Spinner")}</h1>
            <h2 className="heading">{t("Spinner") + ' ' + t("with") + ' ' + t("border")}</h2>
            <div className="commonContainer">
                <SpinnerComponent animation="border" className="spinner" />
                <SpinnerComponent animation="border" className="spinner" variant="secondary" />
                <SpinnerComponent animation="border" className="spinner" variant="danger" />
                <SpinnerComponent animation="border" className="spinner" variant="success" />
                <SpinnerComponent animation="border" className="spinner" variant="warning" />
                <SpinnerComponent animation="border" className="spinner" variant="info" />
                <SpinnerComponent animation="border" className="spinner" variant="light" />
                <SpinnerComponent animation="border" className="spinner" variant="dark" />
            </div>
            <h2 className="heading">{t("Spinner") + ' ' + t("with") + ' ' + t("grow")}</h2>
            <div className="commonContainer">
                <SpinnerComponent animation="grow" className="spinner" />
                <SpinnerComponent animation="grow" className="spinner" variant="secondary" />
                <SpinnerComponent animation="grow" className="spinner" variant="danger" />
                <SpinnerComponent animation="grow" className="spinner" variant="success" />
                <SpinnerComponent animation="grow" className="spinner" variant="warning" />
                <SpinnerComponent animation="grow" className="spinner" variant="info" />
                <SpinnerComponent animation="grow" className="spinner" variant="light" />
                <SpinnerComponent animation="grow" className="spinner" variant="dark" />
            </div>
            <h2 className="heading">{t("fullpage").charAt(0).toUpperCase() + t("fullpage").slice(1) + ' ' + t("Spinner")}</h2>
            <div className="commonContainer">
                <ButtonComponent label={t("fullpage").charAt(0).toUpperCase() + t("fullpage").slice(1) + ' ' + t("Spinner")} onClick={handleFullPage} style={{ marginBottom: '2rem' }} />
                {fullPage && <SpinnerComponent animation="border" className="spinner" fullPage={fullPage} />}
            </div>
            <Footer />
        </div>
    )
}

export default SpinnerExample;