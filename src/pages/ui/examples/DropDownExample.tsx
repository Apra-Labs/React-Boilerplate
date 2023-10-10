import React from "react";
import { useTranslation } from "react-i18next";
import { items } from "../../../assets/data/data";
import styles from '../styles/Common.module.css';
const Sidebar = React.lazy(() => import('../Sidebar'));
const Navigation = React.lazy(() => import('../../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../../containers/footer/Footer'));
const DropDownComponent = React.lazy(() => import('../../../components/DropDownComponent'));

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