import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import CardComponent from "../../../components/CardComponent";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";

const CardExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <CardComponent title={t("MyCard")} message={t("Thisisancardexample")}/>
            <Footer />
        </>
    )
}

export default CardExample;