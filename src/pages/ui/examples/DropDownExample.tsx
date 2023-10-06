import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import DropDownComponent from "../../../components/DropDownComponent";
import { useTranslation } from "react-i18next";
import { items } from "../../../assets/data/data";
import styles from '../styles/Common.module.css';

const DropDownExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Dropdown")}</h1>
            <div className={styles.commonContainer}>
                <DropDownComponent
                    label={t("MyDropDown")}
                    options={items}
                    dropDownMenuclassName={styles.dropDownMenu}
                    dropDownItemclassName={styles.dropDownItem}
                />
            </div>
            <Footer />
        </div>
    )
}

export default DropDownExample