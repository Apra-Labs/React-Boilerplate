import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import InputComponent from "../../../components/InputComponent";
import HeaderComponent from "../../../components/HeaderComponent";
import { useTranslation } from "react-i18next";

const InputExample: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Input")} />
            <InputComponent />
            <Footer />
        </>
    )
}

export default InputExample;