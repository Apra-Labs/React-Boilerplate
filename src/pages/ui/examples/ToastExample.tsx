import { useTranslation } from "react-i18next";
import React from "react";
import styles from '../styles/Common.module.css';
import { useCallback, useState } from "react";
const Sidebar = React.lazy(() => import('../Sidebar'));
const Navigation = React.lazy(() => import('../../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../../containers/footer/Footer'));
const ButtonComponent = React.lazy(() => import('../../../components/ButtonComponent'));
const ToastComponent = React.lazy(() => import('../../../components/ToastComponent'));

const ToastExample: React.FC = () => {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const { t } = useTranslation();

    const closeAlert = useCallback(() => {
        setShowAlert(false);
    },[]);

    const handleClick = useCallback(() => {
        setShowAlert(true);
    },[])

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Toast")}</h1>
            <div className={styles.commonContainer}>
                <div className={styles.toastContainer}>
                    <ButtonComponent label={t("Click")} onClick={handleClick} className={styles.toastButton}/>
                    <ToastComponent position="top-end" messages={[
                        {header: "Toast", message: "This is a toast", variant: "primary", show: showAlert, onClose: closeAlert, headerStyle: {justifyContent: "space-between"}},
                        {header: "Toast", message: "This is a toast", variant: "secondary", show: showAlert, onClose: closeAlert, headerStyle: {justifyContent: "space-between"}},
                        {header: "Toast", message: "This is a toast", variant: "success", show: showAlert, onClose: closeAlert, headerStyle: {justifyContent: "space-between"}},
                        {header: "Toast", message: "This is a toast", variant: "danger", show: showAlert, onClose: closeAlert, headerStyle: {justifyContent: "space-between"}},
                        {header: "Toast", message: "This is a toast", variant: "warning", show: showAlert, onClose: closeAlert, headerStyle: {justifyContent: "space-between"}},
                        {header: "Toast", message: "This is a toast", variant: "info", show: showAlert, onClose: closeAlert, headerStyle: {justifyContent: "space-between"}},
                        {header: "Toast", message: "This is a toast", variant: "light", show: showAlert, onClose: closeAlert, headerStyle: {justifyContent: "space-between"}, messageStyle:{color: 'black'}},
                        {header: "Toast", message: "This is a toast", variant: "dark", show: showAlert, onClose: closeAlert, headerStyle: {justifyContent: "space-between"}, messageStyle: {color: 'white'}}
                    ]}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ToastExample;