import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import DropDownComponent from "../../../components/DropDownComponent";
import { useTranslation } from "react-i18next";
import { items } from "../../../assets/data/data";
import '../styles/Common.css';

const DropDownExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Dropdown")}</h1>
            <div className="commonContainer">
                <DropDownComponent
                    label={t("MyDropDown")}
                    options={items}
                    dropDownMenuclassName="dropDownMenu"
                    dropDownItemclassName="dropDownItem"
                />
            </div>
            <Footer />
        </div>
    )
}

export default DropDownExample