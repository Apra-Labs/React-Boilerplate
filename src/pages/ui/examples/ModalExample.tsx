import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import ButtonComponent from "../../../components/ButtonComponent";
import ModalComponent from "../../../components/ModalComponent";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import '../styles/Common.css';

const ModalExample: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [showNoAnimation, setShowNoAnimation] = useState<boolean>(false);
    const [showVerticalModal, setShowVerticalModal] = useState<boolean>(false);

    const { t } = useTranslation();

    const handleClick = () => {
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }

    const handleClickNoAnimation = () => {
        setShowNoAnimation(true);
    }

    const handleHideNoAnimation = () => {
        setShowNoAnimation(false);
    }

    const handleClickVerticalModal = () => {
        setShowVerticalModal(true);
    }

    const handleHideVerticalModal = () => {
        setShowVerticalModal(false);
    }

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Modal")}</h1>
            <div className="commonContainer">
                <ButtonComponent label={t("Click")} onClick={handleClick} />
                <ModalComponent
                    show={show}
                    onHide={handleHide}
                    title={t("MyModal")}
                    body={t("Thisisamodal")}
                    modalHeaderClass="modalClass"
                    modalBodyClass="modalClass"
                    modalFooterClass="modalClass"
                />
            </div>
            <h2 className="heading">{t("Modal") + ' ' + t("without") + ' ' + t("animation")}</h2>
            <div className="commonContainer">
                <ButtonComponent label={t("Click")} onClick={handleClickNoAnimation} />
                <ModalComponent
                    show={showNoAnimation}
                    onHide={handleHideNoAnimation}
                    title={t("MyModal")}
                    body={t("Thisisamodal")}
                    modalHeaderClass="modalClass"
                    modalBodyClass="modalClass"
                    modalFooterClass="modalClass"
                    animation={false}
                />
            </div>
            <h2 className="heading">
                {t("vertically").charAt(0).toUpperCase() + t("vertically").slice(1) + ' ' + t("centered") + ' ' + t("Modal").charAt(0).toLowerCase() + t("Modal").slice(1)}
            </h2>
            <div className="commonContainer">
                <ButtonComponent label={t("Click")} onClick={handleClickVerticalModal} />
                <ModalComponent
                    show={showVerticalModal}
                    onHide={handleHideVerticalModal}
                    title={t("MyModal")}
                    body={t("Thisisamodal")}
                    modalHeaderClass="modalClass"
                    modalBodyClass="modalClass"
                    modalFooterClass="modalClass"
                    centered
                />
            </div>
            <Footer />
        </div>
    )
}

export default ModalExample;