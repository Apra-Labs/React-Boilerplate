import { useTranslation } from "react-i18next";
import ToastComponent from "../../../components/ToastComponent";
import Navigation from "../../../containers/Navigation";
import Sidebar from "../Sidebar";
import Footer from "../../../containers/Footer";
import '../styles/Common.css';

const ToastExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Toast")}</h1>
            <div className="commonContainer">
                <div className="toastContainer">
                    <ToastComponent
                        header={t("Toast")}
                        message={t("Thisisatoastexample")}
                        variant="primary"
                        headerStyle={{ justifyContent: 'space-between' }}
                        className="toast"
                    />
                    <ToastComponent
                        header={t("Toast")}
                        message={t("Thisisatoastexample")}
                        variant="secondary"
                        headerStyle={{ justifyContent: 'space-between' }}
                        className="toast"
                    />
                    <ToastComponent
                        header={t("Toast")}
                        message={t("Thisisatoastexample")}
                        variant="danger"
                        headerStyle={{ justifyContent: 'space-between' }}
                        className="toast"
                    />
                    <ToastComponent
                        header={t("Toast")}
                        message={t("Thisisatoastexample")}
                        variant="success"
                        headerStyle={{ justifyContent: 'space-between' }}
                        className="toast"
                    />
                    <ToastComponent
                        header={t("Toast")}
                        message={t("Thisisatoastexample")}
                        variant="warning"
                        headerStyle={{ justifyContent: 'space-between' }}
                        className="toast"
                    />
                    <ToastComponent
                        header={t("Toast")}
                        message={t("Thisisatoastexample")}
                        variant="info"
                        headerStyle={{ justifyContent: 'space-between' }}
                        className="toast"
                    />
                    <ToastComponent
                        header={t("Toast")}
                        message={t("Thisisatoastexample")}
                        variant="light"
                        headerStyle={{ justifyContent: 'space-between' }}
                        className="toast"
                        messageStyle={{ color: 'black' }}
                    />
                    <ToastComponent
                        header={t("Toast")}
                        message={t("Thisisatoastexample")}
                        variant="dark"
                        headerStyle={{ justifyContent: 'space-between' }}
                        className="toast"
                        messageStyle={{ color: 'white' }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ToastExample;