import { faAngleRight, faHouse, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

interface NavigationStatusProps {
    route: string;
    subRoute: string;
    childRoute?: string;
}

const NavigationStatus: React.FC<NavigationStatusProps> = ({ route, subRoute, childRoute }) => {
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    }

    const currentLanguage = useAppSelector(state => state.langReducer.language);

    return (
        <div className={styles.status}>
            <a onClick={redirectToHome} className={styles.homeBtn}>
                <p className={styles.statusElements}><FontAwesomeIcon icon={faHouse} /></p>
            </a>
            <p className={styles.statusElements}><FontAwesomeIcon icon={currentLanguage === 'عربي' ? faAngleLeft : faAngleRight} /></p>
            <p className={styles.statusElements}>{route}</p>
            <p className={styles.statusElements}><FontAwesomeIcon icon={currentLanguage === 'عربي' ? faAngleLeft : faAngleRight} /></p>
            <p className={styles.statusElements}>{subRoute}</p>
            {!childRoute || <>
                <p className={styles.statusElements}><FontAwesomeIcon icon={currentLanguage === 'عربي' ? faAngleLeft : faAngleRight} /></p>
                <p className={styles.statusElements}>{childRoute}</p></>
            }
        </div>
    )
}

export default NavigationStatus;