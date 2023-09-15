import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import CheckBoxComponent from "../../../components/CheckBoxComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../../components/HeaderComponent";
import ButtonComponent from "../../../components/ButtonComponent";
import '../styles/Common.css';

const CheckBoxExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Checkbox")} />
            <div className="commonContainer">
                <h3>{t("SelectOptions")}</h3>
                <CheckBoxComponent label={t("Option1")} onChange={() => { }} className="checkbox" />
                <CheckBoxComponent label={t("Option2")} onChange={() => { }} className="checkbox" />
                <CheckBoxComponent label={t("Option3")} onChange={() => { }} className="checkbox" />
                <ButtonComponent label="Submit" onClick={() => { }} />
            </div>
            <Footer />
        </>
    )
}

export default CheckBoxExample;