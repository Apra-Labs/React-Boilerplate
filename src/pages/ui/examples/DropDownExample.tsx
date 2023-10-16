import React from "react";
import { useTranslation } from "react-i18next";
import { items } from "../../../assets/data/data";
import styles from '../styles/Common.module.css';
import HeaderComponent from "../../../components/HeaderComponent";
const NavigationStatus =  React.lazy(() => import('../../../containers/navigationStatus'));
const DropDownComponent = React.lazy(() => import('../../../components/DropDownComponent'));

const DropDownExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Components")}
                childRoute={t("Dropdown")}
            />
            <HeaderComponent className={styles.heading} title={t("Dropdown")} />
            <div className={styles.commonContainer}>
                <DropDownComponent
                    label={t("MyDropDown")}
                    options={items}
                    dropDownMenuclassName={styles.dropDownMenu}
                    dropDownItemclassName={styles.dropDownItem}
                />
            </div>
        </div>
    )
}

export default DropDownExample