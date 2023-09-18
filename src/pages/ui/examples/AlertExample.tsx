import AlertComponent from "../../../components/AlertComponent";
import Sidebar from "../Sidebar";
import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const AlertExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Alert")}</h1>
            <div className="commonContainer">
                <AlertComponent message={t("Thisisanalertexample")} />
            </div>
            <Footer />
        </>
    )
}

export default AlertExample;