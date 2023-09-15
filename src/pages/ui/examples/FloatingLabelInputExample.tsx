import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import FloatingLabelInputComponent from "../../../components/FloatingLabelInputComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../../components/HeaderComponent";
import '../styles/Common.css';

const FloatingLabelInputExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("FloatingLabelInput")} />
            <div className="commonContainer">
                <FloatingLabelInputComponent label={t("EmailAddress")} />
            </div>
            <Footer />
        </>
    )
}

export default FloatingLabelInputExample;