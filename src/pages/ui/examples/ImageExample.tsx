import Navigation from "../../../containers/Navigation";
import Footer from "../../../containers/Footer";
import Sidebar from "../Sidebar";
import ImageComponent from "../../../components/ImageComponent";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';

const ImageExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <Navigation />
            <Sidebar />
            <div className={styles.imgDiv}>
                <h1 className={styles.heading}>{t("Image")}</h1>
                <div className={styles.imgContainer}>
                    <div className={styles.imgElement}>
                        <ImageComponent src={require("../../../assets/images/person_image.webp")} className={styles.imageClass} shape="rounded" />
                        <p className={styles.imgSubHeading}>Rounded</p>
                    </div>
                    <div className={styles.imgElement}>
                        <ImageComponent src={require("../../../assets/images/person_image.webp")} className={styles.imageClass} shape="roundedCircle" />
                        <p className={styles.imgSubHeading}>Rounded Circle</p>
                    </div>
                    <div className={styles.imgElement}>
                        <ImageComponent src={require("../../../assets/images/person_image.webp")} className={styles.imageClass} shape="thumbnail" />
                        <p className={styles.imgSubHeading}>Thumbnail</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ImageExample;