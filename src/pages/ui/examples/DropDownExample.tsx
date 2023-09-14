import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import DropDownComponent from "../../../components/DropDownComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../../../components/HeaderComponent";
import { items } from "../../../assets/data/data";

const DropDownExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar/>
            <HeaderComponent label={t("Dropdown")} />
            <DropDownComponent label={t("MyDropDown")} items={items}/>
            <Footer />
        </>
    )
}

export default DropDownExample