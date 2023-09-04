import { NavLink } from 'react-router-dom';
import './styles/Sidebar.css';

const components = ["Alert", "Button", "Card", "Checkbox", "Dropdown", "Floating label input", "Image", "Input", "Modal", "Radio", "Spinner", "Toggle switch"];

const Sidebar: React.FC = () => {
    return (
        <div className="sideNav">
            {components.map(component =>
                <NavLink
                    className={({ isActive }) => (isActive ? 'activeLink' : 'links')}
                    to={"/uikit/" + component.toLowerCase().split(" ").join("")}
                >
                    {component}
                </NavLink>
            )}
        </div>
    )
}

export default Sidebar;