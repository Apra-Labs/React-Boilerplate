import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import ImageComponent from "../../../components/ImageComponent";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const ImageExample: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Image")}</h1>
            <div className="imgContainer">
                <div className="imgElement">
                    <ImageComponent src={require("../../../assets/images/apra_logo.png")} className="imageClass" shape="rounded"/>
                    <p className="subHeading">Rounded</p>
                </div>
                <div className="imgElement">
                    <ImageComponent src={require("../../../assets/images/apra_logo.png")} className="imageClass" shape="roundedCircle"/>
                    <p className="subHeading">Rounded Circle</p>
                </div>
                <div className="imgElement">
                    <ImageComponent src={require("../../../assets/images/apra_logo.png")} className="imageClass" shape="thumbnail"/>
                    <p className="subHeading">Thumbnail</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ImageExample;