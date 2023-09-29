import { NavLink } from 'react-router-dom';
import './styles/Sidebar.css';
import { sideBarElements } from '../../assets/data/data';

const Sidebar: React.FC = () => {
    return (
        <div className="sideNav">
            {sideBarElements?.map(element =>
                <NavLink
                    className={({ isActive }) => (isActive ? 'activeLink' : 'links')}
                    to={"/uikit/" + element.toLowerCase().split(" ").join("")}
                >
                    {element}
                </NavLink>
            )}
        </div>
    )
}

export default Sidebar;