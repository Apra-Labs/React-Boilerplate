import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import ButtonComponent from "../../../components/ButtonComponent";
import ModalComponent from "../../../components/ModalComponent";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import HeaderComponent from "../../../components/HeaderComponent";
import '../styles/Common.css';

const ModalExample: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const { t } = useTranslation();

    const handleClick = () => {
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }

    return (
        <>
            <Navigation />
            <Sidebar />
            <HeaderComponent label={t("Modal")} />
            <div className="commonContainer">
                <ButtonComponent label={t("Click")} onClick={handleClick} />
                <ModalComponent show={show} onHide={handleHide} title={t("MyModal")} body={t("Thisisamodal")} />
            </div>
            <Footer />
        </>
    )
}

export default ModalExample;