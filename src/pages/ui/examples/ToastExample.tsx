import { useTranslation } from "react-i18next";
import { lazy } from "react";
import styles from '../styles/Common.module.css';
import { useCallback, useState } from "react";
import '../styles/styles.css';
const NavigationStatus = lazy(() => import('../../../containers/navigationStatus'));
const ButtonComponent = lazy(() => import('../../../components/ButtonComponent'));
const ToastComponent = lazy(() => import('../../../components/ToastComponent'));
const HeaderComponent = lazy(() => import('../../../components/HeaderComponent'));

const ToastExample: React.FC = () => {
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const { t } = useTranslation();

    const closeAlert = useCallback(() => {
        setShowAlert(false);
    }, []);

    const handleClick = useCallback(() => {
        setShowAlert(true);
    }, [])

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Components")}
                childRoute={t("Toast")}
            />
            <HeaderComponent className={styles.heading} title={t("Toast")} />
            <div className={styles.commonContainer}>
                <div className={styles.toastContainer}>
                    <ButtonComponent label={t("Click")} onClick={handleClick} className={styles.toastButton} />
                    <ToastComponent position="top-end" messages={[
                        { header: "Toast", message: "This is a toast", variant: "primary", className: "toast", show: showAlert, onClose: closeAlert, headerStyle: { justifyContent: "space-between" } },
                        { header: "Toast", message: "This is a toast", variant: "secondary", className: "toast", show: showAlert, onClose: closeAlert, headerStyle: { justifyContent: "space-between" } },
                        { header: "Toast", message: "This is a toast", variant: "success", className: "toast", show: showAlert, onClose: closeAlert, headerStyle: { justifyContent: "space-between" } },
                        { header: "Toast", message: "This is a toast", variant: "danger", className: "toast", show: showAlert, onClose: closeAlert, headerStyle: { justifyContent: "space-between" } },
                        { header: "Toast", message: "This is a toast", variant: "warning", className: "toast", show: showAlert, onClose: closeAlert, headerStyle: { justifyContent: "space-between" } },
                        { header: "Toast", message: "This is a toast", variant: "info", className: "toast", show: showAlert, onClose: closeAlert, headerStyle: { justifyContent: "space-between" } },
                        { header: "Toast", message: "This is a toast", variant: "light", className: "toast", show: showAlert, onClose: closeAlert, headerStyle: { justifyContent: "space-between" }, messageStyle: { color: 'black' } },
                        { header: "Toast", message: "This is a toast", variant: "dark", className: "toast", show: showAlert, onClose: closeAlert, headerStyle: { justifyContent: "space-between" }, messageStyle: { color: 'white' } }
                    ]} />
                </div>
            </div>
        </div>
    )
}

export default ToastExample;