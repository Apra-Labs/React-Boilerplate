import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import FloatingLabelInputComponent from "../../../components/FloatingLabelInputComponent";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const FloatingLabelInputExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("FloatingLabelInput")}</h1>
            <div className="commonContainer">
                <FloatingLabelInputComponent label={t("EmailAddress")} />
            </div>
            <Footer />
        </div>
    )
}

export default FloatingLabelInputExample;