import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import CheckBoxComponent from "../../../components/CheckBoxComponent";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../components/ButtonComponent";
import '../styles/Common.css';

const CheckBoxExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Checkbox")}</h1>
            <div className="commonContainer">
                <h3>{t("SelectOptions")}</h3>
                <CheckBoxComponent label={t("Option1")} onChange={() => { }} className="checkbox" style={{accentColor: 'red'}}/>
                <CheckBoxComponent label={t("Option2")} onChange={() => { }} className="checkbox" />
                <CheckBoxComponent label={t("Option3")} onChange={() => { }} className="checkbox" />
                <ButtonComponent label="Submit" onClick={() => { }} />
            </div>
            <Footer />
        </div>
    )
}

export default CheckBoxExample;