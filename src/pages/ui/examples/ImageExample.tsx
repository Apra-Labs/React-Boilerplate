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
            <div className="imgDiv">
                <h1 className="heading">{t("Image")}</h1>
                <div className="imgContainer">
                    <div className="imgElement">
                        <ImageComponent src={require("../../../assets/images/person_image.webp")} className="imageClass" shape="rounded" />
                        <p className="imgSubHeading">Rounded</p>
                    </div>
                    <div className="imgElement">
                        <ImageComponent src={require("../../../assets/images/person_image.webp")} className="imageClass" shape="roundedCircle" />
                        <p className="imgSubHeading">Rounded Circle</p>
                    </div>
                    <div className="imgElement">
                        <ImageComponent src={require("../../../assets/images/person_image.webp")} className="imageClass" shape="thumbnail" />
                        <p className="imgSubHeading">Thumbnail</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ImageExample;