import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import SpinnerComponent from "../../../components/SpinnerComponent";

const SpinnerExample: React.FC = () => {
    return (
        <>
            <Navigation />
            <Sidebar />
            <SpinnerComponent animation="border" />
            <Footer />
        </>
    )
}

export default SpinnerExample;