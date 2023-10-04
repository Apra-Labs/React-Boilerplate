import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';
import TextAreaComponent from "../../../components/TextAreaComponent";

const TextAreaExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("Textarea")}</h1>
            <div className="commonContainer">
                <TextAreaComponent
                    placeholder={t("Address")}
                    textAreaContainerClassName="textAreaContainer"
                    textAreaInputClassName="textAreaInput"
                />
            </div>
            <Footer />
        </div>
    )
}

export default TextAreaExample;