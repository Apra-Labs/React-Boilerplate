import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
import { useCallback, useState } from "react";
const ButtonComponent = React.lazy(() => import('../../../components/ButtonComponent'));
const SpinnerComponent = React.lazy(() => import('../../../components/SpinnerComponent'));
const HeaderComponent = React.lazy(() => import('../../../components/HeaderComponent'));

const SpinnerExample: React.FC = () => {
    const [fullPage, setFullPage] = useState<boolean>(false);

    const { t } = useTranslation();

    const handleFullPage = useCallback(() => {
        setFullPage(true);
        const closeFullPage = setTimeout(() => {
            setFullPage(false);
            clearTimeout(closeFullPage);
        }, 3000);
    }, []);

    return (
        <div className={styles.exampleContainer}>
            <HeaderComponent className={styles.heading} title={t("Spinner")} />
            <HeaderComponent className={styles.subHeading} title={t("Spinner") + ' ' + t("With") + ' ' + t("Border")} />
            <div className={styles.commonContainer}>
                <SpinnerComponent animation="border" className={styles.spinner} />
                <SpinnerComponent animation="border" className={styles.spinner} variant="secondary" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="danger" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="success" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="warning" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="info" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="light" />
                <SpinnerComponent animation="border" className={styles.spinner} variant="dark" />
            </div>
            <HeaderComponent className={styles.subHeading} title={t("Spinner") + ' ' + t("With") + ' ' + t("Grow")} />
            <div className={styles.commonContainer}>
                <SpinnerComponent animation="grow" className={styles.spinner} />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="secondary" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="danger" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="success" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="warning" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="info" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="light" />
                <SpinnerComponent animation="grow" className={styles.spinner} variant="dark" />
            </div>
            <HeaderComponent
                className={styles.subHeading}
                title={t("Fullpage").charAt(0).toUpperCase() + t("Fullpage").slice(1) + ' ' + t("Spinner")}
            />
            <div className={styles.commonContainer}>
                <ButtonComponent
                    label={t("fullpage").charAt(0).toUpperCase() + t("Fullpage").slice(1) + ' ' + t("Spinner")}
                    onClick={handleFullPage}
                    style={{ marginBottom: '2rem' }}
                />
                {fullPage && <SpinnerComponent animation="border" className={styles.spinner} fullPage={fullPage} />}
            </div>
        </div>
    )
}

export default SpinnerExample;