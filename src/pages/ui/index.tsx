import Navigation from "../../containers/Navigation";
import Footer from "../../containers/Footer";
import Sidebar from "./Sidebar";

const UiKit: React.FC = () => {
    return (
        <>
            <Navigation />
            <Sidebar />
            <Footer /> 
        </>
    )
}

export default UiKit;