import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import CardComponent from "../../../components/CardComponent";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../../components/HeaderComponent";

const CardExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Card")} />
            <CardComponent title={t("MyCard")} message={t("Thisisancardexample")}/>
            <Footer />
        </>
    )
}

export default CardExample;