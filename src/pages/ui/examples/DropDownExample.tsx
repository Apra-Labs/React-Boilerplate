import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import DropDownComponent from "../../../components/DropDownComponent";
import { useTranslation } from "react-i18next";

const items = [ {key: "Person 1", value: "1"}, {key: "Person 2", value: "2"} ];

const DropDownExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navigation />
            <Sidebar/>
            <DropDownComponent label={t("MyDropDown")} items={items}/>
            <Footer />
        </>
    )
}

export default DropDownExample