import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import styles from '../styles/Common.module.css';
const ButtonComponent = lazy(() => import('../../../components/ButtonComponent'));
const ModalComponent = lazy(() => import('../../../components/ModalComponent'));
const HeaderComponent = lazy(() => import('../../../components/HeaderComponent'));
const NavigationStatus = lazy(() => import('../../../containers/navigationStatus'));

const ModalExample: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [showNoAnimation, setShowNoAnimation] = useState<boolean>(false);
    const [showVerticalModal, setShowVerticalModal] = useState<boolean>(false);

    const { t } = useTranslation();

    const handleClick = useCallback(() => {
        setShow(true);
    }, []);

    const handleHide = useCallback(() => {
        setShow(false);
    }, []);

    const handleClickNoAnimation = useCallback(() => {
        setShowNoAnimation(true);
    }, []);

    const handleHideNoAnimation = useCallback(() => {
        setShowNoAnimation(false);
    }, []);

    const handleClickVerticalModal = useCallback(() => {
        setShowVerticalModal(true);
    }, []);

    const handleHideVerticalModal = useCallback(() => {
        setShowVerticalModal(false);
    }, []);

    const theme = document.documentElement.getAttribute('data-theme');

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Components")}
                childRoute={t("Modal")}
            />
            <HeaderComponent className={styles.heading} title={t("Modal")} />
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
            <HeaderComponent className={styles.subHeading} title={t("Modal") + ' ' + t("Without") + ' ' + t("Animation")} />
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
            <HeaderComponent
                className={styles.subHeading}
                title={t("Vertically").charAt(0).toUpperCase() + t("Vertically").slice(1) + ' ' + t("Centered") + ' ' + t("Modal").charAt(0).toLowerCase() + t("Modal").slice(1)}
            />
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
        </div>
    )
}

export default ModalExample;