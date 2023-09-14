import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import RadioComponent from "../../../components/RadioComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../../components/HeaderComponent";
import ButtonComponent from "../../../components/ButtonComponent";
import '../styles/RadioExample.css';

const RadioExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Radio")} />
            <h3 className="exampleHeading">{t("SelectOptions")}</h3>
            <RadioComponent name="myoption" label={t("Option1")}/>
            <RadioComponent name="myoption" label={t("Option2")}/>
            <RadioComponent name="myoption" label={t("Option3")}/>
            <ButtonComponent label="Submit"/>
            <Footer />
        </>
    )
}

export default RadioExample;