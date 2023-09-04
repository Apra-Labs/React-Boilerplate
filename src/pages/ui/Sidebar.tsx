import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

const components = ["Alert", "Button", "Card", "Checkbox", "Dropdown", "Floating label input", "Image", "Input", "Modal", "Radio", "Spinner", "Toggle switch"];

const Sidebar: React.FC = () => {
    return (
        <div className="sideNav">
            {components.map(component => 
                <Link className='links' to={"/uikit/" + component.toLowerCase().split(" ").join("")}>{component}</Link>
            )}
        </div>
    )
}

export default Sidebar;