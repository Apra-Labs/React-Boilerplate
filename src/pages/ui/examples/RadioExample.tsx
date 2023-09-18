import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import RadioComponent from "../../../components/RadioComponent";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../../components/ButtonComponent";
import '../styles/Common.css';

const RadioExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Radio")}</h1>
            <div className="commonContainer">
                <h3>{t("SelectOptions")}</h3>
                <RadioComponent name="myoption" label={t("Option1")} onChange={() => { }} className="checkbox" />
                <RadioComponent name="myoption" label={t("Option2")} onChange={() => { }} className="checkbox" />
                <RadioComponent name="myoption" label={t("Option3")} onChange={() => { }} className="checkbox" />
                <ButtonComponent label="Submit" onClick={() => { }} />
            </div>
            <Footer />
        </>
    )
}

export default RadioExample;