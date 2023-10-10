import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
const Sidebar = React.lazy(() => import('../Sidebar'));
const Navigation = React.lazy(() => import('../../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../../containers/footer/Footer'));
const RowComponent = React.lazy(() => import('../../../components/RowComponent'));
const ColumnComponent = React.lazy(() => import('../../../components/ColumnComponent'));

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
                        <ColumnComponent children={<p>{t("SNo")}</p>} className={styles.rowColumnHeading} />
                        <ColumnComponent children={<p>{t("TechStack")}</p>} className={styles.rowColumnHeading} />
                        <ColumnComponent children={<p>{t("Domain")}</p>} className={styles.rowColumnHeading} />
                    </div>
                </RowComponent>
                <RowComponent>
                    <div className={styles.row}>
                        <ColumnComponent children={<p>1</p>} className={styles.rowColumn} />
                        <ColumnComponent children={<p>{t("React")}</p>} className={styles.rowColumn} />
                        <ColumnComponent children={<p>{t("Web")}</p>} className={styles.rowColumn} />
                    </div>
                </RowComponent>
                <RowComponent >
                    <div className={styles.row}>
                        <ColumnComponent children={<p>2</p>} className={styles.rowColumn} />
                        <ColumnComponent children={<p>{t("Kotlin") + " " + t("With") + " " + t("AndroidStudio")}</p>} className={styles.rowColumn} />
                        <ColumnComponent children={<p>{t("Mobile") + " " + t("App") + " " + t("Development")}</p>} className={styles.rowColumn} />
                    </div>
                </RowComponent>

            </div>
            <Footer />
        </div >
    )
}

export default RowColumnExample;