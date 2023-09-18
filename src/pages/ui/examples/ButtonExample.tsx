import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import ButtonComponent from "../../../components/ButtonComponent";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const ButtonExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Button")}</h1>
            <div className="commonContainer">
                <ButtonComponent label={t("Click")} onClick={() => { }} />
            </div>
            <Footer />
        </>
    )
}

export default ButtonExample;