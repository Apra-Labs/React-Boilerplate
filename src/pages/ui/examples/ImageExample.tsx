import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import ImageComponent from "../../../components/ImageComponent";

const ImageExample: React.FC = () => {
    return (
        <>
            <Navigation />
            <Sidebar />
            <ImageComponent src={require("../../../assets/images/apra_logo.png")} />
            <Footer />
        </>
    )
}

export default ImageExample;