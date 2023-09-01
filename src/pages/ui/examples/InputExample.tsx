import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import InputComponent from "../../../components/InputComponent";

const InputExample: React.FC = () => {
    return (
        <>
            <Navigation />
            <Sidebar />
            <InputComponent />
            <Footer />
        </>
    )
}

export default InputExample;