import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
import TextAreaComponent from "../../../components/TextAreaComponent";

const TextAreaExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Textarea")}</h1>
            <div className={styles.commonContainer}>
                <TextAreaComponent
                    placeholder={t("Address")}
                    textAreaContainerClassName={styles.textAreaContainer}
                    textAreaInputClassName={styles.textAreaInput}
                />
            </div>
            <Footer />
        </div>
    )
}

export default TextAreaExample;