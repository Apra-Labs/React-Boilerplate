import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import FloatingLabelInputComponent from "../../../components/FloatingLabelInputComponent";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const FloatingLabelInputExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("FloatingLabelInput")}</h1>
            <div className="commonContainer">
                <FloatingLabelInputComponent
                    label={t("EmailAddress")}
                    classNameFloatingContainer="floatingInputContainer"
                    classNameFloatingInput="floatingInput"
                    placeholder="Enter your email address"
                    type="email"
                />
            </div>
            <h2 className="heading">{t("Textarea")}</h2>
            <div className="commonContainer">
                <FloatingLabelInputComponent
                    label={t("Textarea")}
                    classNameFloatingContainer="floatingInputContainer"
                    classNameFloatingInput="floatingInput"
                    placeholder="Enter your email address"
                    type="email"
                    textarea
                    styleFloatingInput={{maxHeight: "15rem"}}
                />
            </div>
            <Footer />
        </div>
    )
}

export default FloatingLabelInputExample;