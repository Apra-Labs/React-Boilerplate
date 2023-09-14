import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import CheckBoxComponent from "../../../components/CheckBoxComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../../components/HeaderComponent";
import ButtonComponent from "../../../components/ButtonComponent";

const CheckBoxExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Checkbox")} />
            <h3 style={{marginLeft: '30rem', marginTop: '2rem'}}>{t("SelectOptions")}</h3>
            <CheckBoxComponent label={t("Option1")}/>
            <CheckBoxComponent label={t("Option2")}/>
            <CheckBoxComponent label={t("Option3")}/>
            <ButtonComponent label="Submit"/>
            <Footer />
        </>
    )
}

export default CheckBoxExample;