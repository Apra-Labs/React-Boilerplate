import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import SpinnerComponent from "../../../components/SpinnerComponent";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const SpinnerExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Spinner")}</h1>
            <div className="commonContainer">
                <SpinnerComponent animation="border" style={{height: '10rem', width: '10rem'}}/>
            </div>
            <Footer />
        </div>
    )
}

export default SpinnerExample;