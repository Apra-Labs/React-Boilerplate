import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import InputFloatingLabelComponent from "../../../components/InputFloatingLabelComponent";
import { useTranslation } from "react-i18next";
import '../styles/Common.css';

const InputFloatingLabelExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="exampleContainer">
            <Navigation />
            <Sidebar />
            <h1 className="heading">{t("InputFloatingLabel")}</h1>
            <div className="commonContainer">
                <InputFloatingLabelComponent
                    label={t("EmailAddress")}
                    classNameFloatingContainer="floatingInputContainer"
                    classNameFloatingInput="floatingInput"
                    placeholder="Enter your email address"
                    type="email"
                />
            </div>
            <Footer />
        </div>
    )
}

export default InputFloatingLabelExample;