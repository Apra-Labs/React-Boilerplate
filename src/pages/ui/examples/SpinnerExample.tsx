import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import SpinnerComponent from "../../../components/SpinnerComponent";
import HeaderComponent from "../../../components/HeaderComponent";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const SpinnerExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Spinner")} />
            <div className="commonContainer">
                <SpinnerComponent animation="border" style={{height: '10rem', width: '10rem'}}/>
            </div>
            <Footer />
        </>
    )
}

export default SpinnerExample;