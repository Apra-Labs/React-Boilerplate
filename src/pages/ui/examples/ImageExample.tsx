import React from "react";
import { useTranslation } from "react-i18next";
import styles from '../styles/Common.module.css';
import HeaderComponent from "../../../components/HeaderComponent";
const NavigationStatus =  React.lazy(() => import('../../../containers/navigationStatus'));
const ImageComponent = React.lazy(() => import('../../../components/ImageComponent'));

const ImageExample: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.exampleContainer}>
            <NavigationStatus
                route={t("UiKit")}
                subRoute={t("Components")}
                childRoute={t("Image")}
            />
            <HeaderComponent className={styles.heading} title={t("Image")} />
            <div className={styles.imgContainer}>
                <div className={styles.imgElement}>
                    <ImageComponent src={require("../../../assets/images/person_image.webp")} className={styles.imageClass} shape="rounded" />
                    <p className={styles.imgSubHeading}>Rounded</p>
                </div>
                <div className={styles.imgElement}>
                    <ImageComponent src={require("../../../assets/images/person_image.webp")} className={styles.imageClass} shape="roundedCircle" />
                    <p className={styles.imgSubHeading}>Rounded Circle</p>
                </div>
                <div className={styles.imgElement} style={{ marginBottom: '3rem' }}>
                    <ImageComponent src={require("../../../assets/images/person_image.webp")} className={styles.imageClass} shape="thumbnail" />
                    <p className={styles.imgSubHeading}>Thumbnail</p>
                </div>
            </div>
        </div>
    )
}

export default ImageExample;