import RowComponent from "../../../components/RowComponent";
import ColumnComponent from "../../../components/ColumnComponent";
import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';

const RowColumnExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("RowColumn")}</h1>
            <div className={styles.commonContainer}>
                <RowComponent>
                    <ColumnComponent label={t("SNo")} className={styles.rowcolumnheading} />
                    <ColumnComponent label={t("TechStack")} className={styles.rowcolumnheading} />
                    <ColumnComponent label={t("Domain")} className={styles.rowcolumnheading} />
                </RowComponent>
                <RowComponent>
                    <ColumnComponent label="1" className={styles.rowcolumn} />
                    <ColumnComponent label={t("React")} className={styles.rowcolumn} />
                    <ColumnComponent label={t("Web")} className={styles.rowcolumn} />
                </RowComponent>
                <RowComponent>
                    <ColumnComponent label="2" className={styles.rowcolumn} />
                    <ColumnComponent label={t("Kotlin") + " " + t("with") + " " + t("AndroidStudio")} className={styles.rowcolumn} />
                    <ColumnComponent label={t("Mobile") + " " + t("app") + " " + t("development")} className={styles.rowcolumn} />
                </RowComponent>
            </div>
            <Footer />
        </div>
    )
}

export default RowColumnExample;