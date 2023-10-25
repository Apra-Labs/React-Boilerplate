import { lazy } from 'react';
import styles from './styles.module.css';
import {useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ButtonComponent = lazy(() => import('../../components/ButtonComponent'));

const Home: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/uikit/components/alert");
    }

    return (
        <>
            <div className={styles.description}>
                <p className={styles.mainHeading}>{t("Reduce") + " " + t("Development") + " " + t("Time")}</p>
                <p className={styles.descSubHeading}>{t("With") + " "} Apra React Boilerplate</p>
                <p className={styles.featureDesc}>
                    Apra react boilerplate {t("About")}
                </p>
                <ButtonComponent label={t("Explore") + " " + t("UiKit")} onClick={handleClick} variant="outline-primary" />
            </div>
        </>
    )
}

export default Home;