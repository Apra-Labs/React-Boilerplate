import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import InputComponent from "../../../components/InputComponent";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const InputExample: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Input")}</h1>
            <div className="commonContainer">
                <InputComponent />
            </div>
            <Footer />
        </>
    )
}

export default InputExample;