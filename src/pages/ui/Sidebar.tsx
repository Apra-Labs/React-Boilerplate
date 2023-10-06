import { NavLink } from 'react-router-dom';
import styles from './styles/Sidebar.module.css';
import { sideBarElements } from '../../assets/data/data';

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sideNav}>
            {sideBarElements?.map(element =>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.activeLink : styles.links)}
                    to={"/uikit/" + element.toLowerCase().split(" ").join("")}
                >
                    {element}
                </NavLink>
            )}
        </div>
    )
}

export default Sidebar;