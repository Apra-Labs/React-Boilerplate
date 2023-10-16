import { NavLink } from 'react-router-dom';
import styles from './styles/Sidebar.module.css';
import { componentsElements } from '../../assets/data/data';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar: React.FC = () => {
    const [showComponentsElements, setShowComponentsElements] = useState<boolean>(true);

    const { t } = useTranslation();

    const handleComponents = () => {
        setShowComponentsElements(!showComponentsElements);
    }

    return (
        <div className={styles.sideNav}>
            <div className={styles.toggleBtn} onClick={handleComponents}>
                <p>{t("Components")}</p>
                <p><FontAwesomeIcon icon={!showComponentsElements ? faAngleRight : faAngleDown} /></p>
            </div>
            {!showComponentsElements || componentsElements?.map((element, index) =>
                <NavLink
                    key={index}
                    className={({ isActive }) => (isActive ? styles.activeLink : styles.links)}
                    to={"/uikit/" + "components/" + element.toLowerCase().split(" ").join("")}
                >
                    {element}
                </NavLink>
            )}
        </div>
    )
}

export default Sidebar;