import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import DropDownComponent from "../../../components/DropDownComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../../components/HeaderComponent";
import { items } from "../../../assets/data/data";
import '../styles/Common.css';

const DropDownExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Dropdown")} />
            <div className="commonContainer">
                <DropDownComponent label={t("MyDropDown")} options={items} />
            </div>
            <Footer />
        </>
    )
}

export default DropDownExample