import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import ImageComponent from "../../../components/ImageComponent";
import HeaderComponent from "../../../components/HeaderComponent";
import { useTranslation } from "react-i18next";
import '../styles/ImageExample.css';

const ImageExample: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Image")} />
            <div className="imgContainer">
                <div className="imgElement">
                    <ImageComponent src={require("../../../assets/images/apra_logo.png")} />
                    <p className="subHeading">Rounded</p>
                </div>
                <div className="imgElement">
                    <ImageComponent src={require("../../../assets/images/apra_logo.png")} roundedCircle rounded={false} />
                    <p className="subHeading">Rounded Circle</p>
                </div>
                <div className="imgElement">
                    <ImageComponent src={require("../../../assets/images/apra_logo.png")} thumbnail rounded={false} />
                    <p className="subHeading">Thumbnail</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ImageExample;