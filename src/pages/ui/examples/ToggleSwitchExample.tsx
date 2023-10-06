import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import ToggleSwitchComponent from "../../../components/ToggleSwitchComponent";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';

const ToggleSwitchExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("ToggleSwitch")}</h1>
            <div className={styles.commonContainer}>
                <ToggleSwitchComponent
                    label={t("MySwitch")}
                    onChange={() => {}}
                    className={styles.toggleSwitch}
                />
            </div>
            <Footer />
        </div>
    )
}

export default ToggleSwitchExample;