import AlertComponent from "../../../components/AlertComponent";
import Sidebar from "../Sidebar";
import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const AlertExample: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Alert")}</h1>
            <div className="commonContainer">
                <AlertComponent message={t("Thisisanalertexample")} /> 
                <AlertComponent message={t("Thisisanalertexample")} variant="secondary"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="danger"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="success"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="warning"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="info"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="light"/> 
                <AlertComponent message={t("Thisisanalertexample")} variant="dark"/> 
            </div>
            <Footer />
        </div>
    )
}

export default AlertExample;