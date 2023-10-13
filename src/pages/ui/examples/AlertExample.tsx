import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const NavigationStatus =  React.lazy(() => import('../../../containers/navigationStatus'));
const HeaderComponent = React.lazy(() => import('../../../components/HeaderComponent'));
const AlertComponent = React.lazy(() => import('../../../components/AlertComponent'));

const AlertExample: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Alert")}
            />
            <HeaderComponent title={t("Alert")} className={styles.heading} />
            <div className={styles.commonContainer}>
                <AlertComponent message={t("Thisisanalertexample")} dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="secondary" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="danger" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="success" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="warning" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="info" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="light" dismissible={false}/>
                <AlertComponent message={t("Thisisanalertexample")} variant="dark" dismissible={false}/>
            </div>
        </div>
    )
}

export default AlertExample;