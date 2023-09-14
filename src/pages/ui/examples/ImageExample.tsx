import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import ImageComponent from "../../../components/ImageComponent";
import HeaderComponent from "../../../components/HeaderComponent";
import { useTranslation } from "react-i18next";

const ImageExample: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Image")} />
            <ImageComponent src={require("../../../assets/images/apra_logo.png")} />
            <Footer />
        </>
    )
}

export default ImageExample;