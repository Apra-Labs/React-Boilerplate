import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import CardComponent from "../../../components/CardComponent";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const CardExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Card")}</h1>
            <div className="commonContainer">
                <CardComponent title={t("MyCard")} message={t("Thisisancardexample")} />
            </div>
            <Footer />
        </div>
    )
}

export default CardExample;