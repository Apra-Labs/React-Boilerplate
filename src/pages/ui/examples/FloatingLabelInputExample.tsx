import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import FloatingLabelInputComponent from "../../../components/FloatingLabelInputComponent";
import { useTranslation } from "react-i18next";

const FloatingLabelInputExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <FloatingLabelInputComponent label={t("EmailAddress")} />
            <Footer />
        </>
    )
}

export default FloatingLabelInputExample;