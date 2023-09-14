import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import ButtonComponent from "../../../components/ButtonComponent";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../../components/HeaderComponent";

const ButtonExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Button")} />
            <ButtonComponent label={t("Click")}/>
            <Footer />
        </>
    )
}

export default ButtonExample;