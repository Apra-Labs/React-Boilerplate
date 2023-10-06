import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import InputComponent from "../../../components/InputComponent";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';

const InputExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <h1 className={styles.heading}>{t("Input")}</h1>
            <div className={styles.commonContainer}>
                <InputComponent inputClassName={styles.inputElement} inputContainerClassName={styles.inputContainer} />
            </div>
            <Footer />
        </div>
    )
}

export default InputExample;