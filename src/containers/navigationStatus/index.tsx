import { faAngleRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";

interface NavigationStatusProps {
    route: string;
    subRoute: string;
}

const NavigationStatus: React.FC<NavigationStatusProps> = ({route, subRoute}) => {
    return(
        <div className={styles.status}>
            <p className={styles.statusElements}><FontAwesomeIcon icon={faHouse} /></p>
            <p className={styles.statusElements}><FontAwesomeIcon icon={faAngleRight} /></p>
            <p className={styles.statusElements}>{route}</p>
            <p className={styles.statusElements}><FontAwesomeIcon icon={faAngleRight} /></p>
            <p className={styles.statusElements}>{subRoute}</p>
        </div>
    )
}

export default NavigationStatus;