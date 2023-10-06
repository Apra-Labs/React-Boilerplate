import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import CardComponent from "../../../components/CardComponent";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';

const CardExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Card")}</h1>
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
            <h2 className={styles.heading}>{t("Card") + " " + t("with") + " " + t("Image")}</h2>
            <div className={styles.commonContainer}>
                <CardComponent
                    style={{width: "12rem"}}
                    imgSrc={require("../../../assets/images/person_image.webp")}
                    title={t("MyCard")}
                    message={t("Thisisacardexample")}
                    variant="primary"
                />
            </div>
            <Footer />
        </div>
    )
}

export default CardExample;