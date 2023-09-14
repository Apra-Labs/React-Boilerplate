import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import SpinnerComponent from "../../../components/SpinnerComponent";
import HeaderComponent from "../../../components/HeaderComponent";
import { useTranslation } from "react-i18next";

const SpinnerExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Spinner")} />
            <SpinnerComponent animation="border" />
            <Footer />
        </>
    )
}

export default SpinnerExample;