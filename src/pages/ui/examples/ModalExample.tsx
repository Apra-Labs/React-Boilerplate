import React from "react";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import styles from '../styles/Common.module.css';
const Sidebar = React.lazy(() => import('../Sidebar'));
const Navigation = React.lazy(() => import('../../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../../containers/footer/Footer'));
const ButtonComponent = React.lazy(() => import('../../../components/ButtonComponent'));
const ModalComponent = React.lazy(() => import('../../../components/ModalComponent'));

const ModalExample: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [showNoAnimation, setShowNoAnimation] = useState<boolean>(false);
    const [showVerticalModal, setShowVerticalModal] = useState<boolean>(false);

    const { t } = useTranslation();

    const handleClick = useCallback(() => {
        setShow(true);
    },[]);

    const handleHide = useCallback(() => {
        setShow(false);
    },[]);

    const handleClickNoAnimation = useCallback(() => {
        setShowNoAnimation(true);
    },[]);

    const handleHideNoAnimation = useCallback(() => {
        setShowNoAnimation(false);
    },[]);

    const handleClickVerticalModal = useCallback(() => {
        setShowVerticalModal(true);
    },[]);

    const handleHideVerticalModal = useCallback(() => {
        setShowVerticalModal(false);
    },[]);
    
    const theme = document.documentElement.getAttribute('data-theme');

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Modal")}</h1>
            <div className={styles.commonContainer}>
                <ButtonComponent label={t("Click")} onClick={handleClick} />
                <ModalComponent
                    show={show}
                    onHide={handleHide}
                    title={t("MyModal")}
                    body={t("Thisisamodal")}
                    modalContainerClass={styles.modalContainer}
                    modalHeaderClass={styles.modalClass}
                    modalBodyClass={styles.modalClass}
                    modalFooterClass={styles.modalClass}
                    closeVariant={theme === "dark" ? "white" : "black"}
                />
            </div>
            <h2 className={styles.heading}>{t("Modal") + ' ' + t("Without") + ' ' + t("Animation")}</h2>
            <div className={styles.commonContainer}>
                <ButtonComponent label={t("Click")} onClick={handleClickNoAnimation} />
                <ModalComponent
                    show={showNoAnimation}
                    onHide={handleHideNoAnimation}
                    title={t("MyModal")}
                    body={t("Thisisamodal")}
                    modalContainerClass={styles.modalContainer}
                    modalHeaderClass={styles.modalClass}
                    modalBodyClass={styles.modalClass}
                    modalFooterClass={styles.modalClass}
                    animation={false}
                    closeVariant={theme === "dark" ? "white" : "black"}
                />
            </div>
            <h2 className={styles.heading}>
                {t("Vertically").charAt(0).toUpperCase() + t("Vertically").slice(1) + ' ' + t("Centered") + ' ' + t("Modal").charAt(0).toLowerCase() + t("Modal").slice(1)}
            </h2>
            <div className={styles.commonContainer}>
                <ButtonComponent label={t("Click")} onClick={handleClickVerticalModal} />
                <ModalComponent
                    show={showVerticalModal}
                    onHide={handleHideVerticalModal}
                    title={t("MyModal")}
                    body={t("Thisisamodal")}
                    modalContainerClass={styles.modalContainer}
                    modalHeaderClass={styles.modalClass}
                    modalBodyClass={styles.modalClass}
                    modalFooterClass={styles.modalClass}
                    closeVariant={theme === "dark" ? "white" : "black"}
                    centered
                />
            </div>
            <Footer />
        </div>
    )
}

export default ModalExample;