import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const HeaderComponent = React.lazy(() => import('../../../components/HeaderComponent'));
const CardComponent = React.lazy(() => import('../../../components/CardComponent'));

const CardExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <HeaderComponent className={styles.heading} title={t("Card")} />
            <div className={styles.commonContainer}>
                <div className={styles.cardContainer}>
                    <CardComponent className={styles.card} title={t("MyCard")} message={t("Thisisacardexample")} />
                    <CardComponent className={styles.card} title={t("MyCard")} message={t("Thisisacardexample")} variant="secondary" />
                    <CardComponent className={styles.card} title={t("MyCard")} message={t("Thisisacardexample")} variant="danger" />
                    <CardComponent className={styles.card} title={t("MyCard")} message={t("Thisisacardexample")} variant="success" />
                    <CardComponent className={styles.card} title={t("MyCard")} message={t("Thisisacardexample")} variant="warning" />
                    <CardComponent className={styles.card} title={t("MyCard")} message={t("Thisisacardexample")} variant="info" />
                    <CardComponent className={styles.card} title={t("MyCard")} message={t("Thisisacardexample")} variant="light" />
                    <CardComponent className={styles.card} title={t("MyCard")} message={t("Thisisacardexample")} variant="dark" />
                </div>
            </div>
            <h2 className={styles.heading}>{t("Card") + " " + t("With") + " " + t("Image")}</h2>
            <div className={styles.commonContainer}>
                <CardComponent
                    style={{width: "12rem"}}
                    imgSrc={require("../../../assets/images/person_image.webp")}
                    title={t("MyCard")}
                    message={t("Thisisacardexample")}
                    variant="primary"
                />
            </div>
        </div>
    )
}

export default CardExample;