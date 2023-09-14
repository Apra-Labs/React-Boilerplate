import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import FloatingLabelInputComponent from "../../../components/FloatingLabelInputComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../../components/HeaderComponent";

const FloatingLabelInputExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("FloatingLabelInput")} />
            <FloatingLabelInputComponent label={t("EmailAddress")} />
            <Footer />
        </>
    )
}

export default FloatingLabelInputExample;