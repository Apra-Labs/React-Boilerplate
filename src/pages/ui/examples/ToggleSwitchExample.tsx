import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import ToggleSwitchComponent from "../../../components/ToggleSwitchComponent";
import { useTranslation } from "react-i18next";

const ToggleSwitchExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <ToggleSwitchComponent label={t("MySwitch")}/>
            <Footer />
        </>
    )
}

export default ToggleSwitchExample;