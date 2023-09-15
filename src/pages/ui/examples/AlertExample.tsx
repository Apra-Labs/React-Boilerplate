import AlertComponent from "../../../components/AlertComponent";
import Sidebar from "../Sidebar";
import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../../components/HeaderComponent";
import '../styles/Common.css';

const AlertExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Alert")} />
            <div className="commonContainer">
                <AlertComponent message={t("Thisisanalertexample")} />
            </div>
            <Footer />
        </>
    )
}

export default AlertExample;