import Navigation from "../../containers/Navigation";
import Footer from "../../containers/Footer";
import './styles.css';
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/uikit/alert");
    }

    return (
        <>
            <Navigation />
            <div className="description">
                <p className="mainHeading">{t("Reduce") + " " + t("development") + " " + t("time")}</p>
                <p className="descSubHeading">{t("with") + " "} Apra React Boilerplate</p>
                <p className="featureDesc">
                    Apra react boilerplate {t("offers") + " " + t("reuseable") + " " + t("common") + " " + t("components") +
                    t("such") + " " + t("as") + " " + t("button") + "," + " " + t("alerts") + "," + " " + t("inputs") + " " + t("and")
                    + " " + t("many") + " " + t("more") + "." + " " + t("it").charAt(0).toUpperCase() + t("it").slice(1) + " " +
                    t("also") + " " + t("comes") + " " + t("with") + " " + t("built") + " " + t("in") + " " + "redux" + " " +
                    "toolkit" + " " + "setup" + "." + " " + t("The") + " " +  "boilerplate" + " " + t("comes") + " " + t("with")
                    + " " + t("Internationalization") + " " + t("support") + " " + t("and") + " " + t("also") + " " + t("login")
                    + " " + t("and") + " " + t("logout") +"."}
                </p>
                <ButtonComponent label={t("Explore") + " " + t("UiKit")} onClick={handleClick} variant="outline-primary"/>
            </div>
            <Footer />
        </>
    )
}

export default Home;