import AlertComponent from "../../../components/AlertComponent";
import Sidebar from "../Sidebar";
import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import { useTranslation } from "react-i18next";

const AlertExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <AlertComponent message={t("Thisisanalertexample")}/>
            <Footer />
        </>
    )
}

export default AlertExample;