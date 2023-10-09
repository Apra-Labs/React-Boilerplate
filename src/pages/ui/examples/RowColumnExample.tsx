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
                    <div className={styles.row}>
                        <ColumnComponent children={<p>{t("SNo")}</p>} className={styles.rowcolumnheading} />
                        <ColumnComponent children={<p>{t("TechStack")}</p>} className={styles.rowcolumnheading} />
                        <ColumnComponent children={<p>{t("Domain")}</p>} className={styles.rowcolumnheading} />
                    </div>
                </RowComponent>
                <RowComponent>
                    <div className={styles.row}>
                        <ColumnComponent children={<p>1</p>} className={styles.rowcolumn} />
                        <ColumnComponent children={<p>{t("React")}</p>} className={styles.rowcolumn} />
                        <ColumnComponent children={<p>{t("Web")}</p>} className={styles.rowcolumn} />
                    </div>
                </RowComponent>
                <RowComponent >
                    <div className={styles.row}>
                        <ColumnComponent children={<p>2</p>} className={styles.rowcolumn} />
                        <ColumnComponent children={<p>{t("Kotlin") + " " + t("with") + " " + t("AndroidStudio")}</p>} className={styles.rowcolumn} />
                        <ColumnComponent children={<p>{t("Mobile") + " " + t("app") + " " + t("development")}</p>} className={styles.rowcolumn} />
                    </div>
                </RowComponent>

            </div>
            <Footer />
        </div >
    )
}

export default RowColumnExample;