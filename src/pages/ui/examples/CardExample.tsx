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
                <div className="cardContainer">
                    <CardComponent className="card" title={t("MyCard")} message={t("Thisisacardexample")} />
                    <CardComponent className="card" title={t("MyCard")} message={t("Thisisacardexample")} variant="secondary" />
                    <CardComponent className="card" title={t("MyCard")} message={t("Thisisacardexample")} variant="danger" />
                    <CardComponent className="card" title={t("MyCard")} message={t("Thisisacardexample")} variant="success" />
                    <CardComponent className="card" title={t("MyCard")} message={t("Thisisacardexample")} variant="warning" />
                    <CardComponent className="card" title={t("MyCard")} message={t("Thisisacardexample")} variant="info" />
                    <CardComponent className="card" title={t("MyCard")} message={t("Thisisacardexample")} variant="light" />
                    <CardComponent className="card" title={t("MyCard")} message={t("Thisisacardexample")} variant="dark" />
                </div>
            </div>
            <h2 className="heading">{t("Card") + " " + t("with") + " " + t("Image")}</h2>
            <div className="commonContainer">
                <CardComponent
                    style={{width: "12rem"}}
                    imgSrc={require("../../../assets/images/person_image.webp")}
                    title={t("MyCard")}
                    message={t("Thisisancardexample")}
                    variant="primary"
                />
            </div>
            <Footer />
        </div>
    )
}

export default CardExample;