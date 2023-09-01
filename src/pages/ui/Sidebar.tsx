import './Sidebar.css';

const components = ["Alert", "Button", "Card", "Checkbox", "Dropdown", "Floating label input", "Image", "Input", "Modal", "Radio", "Spinner", "Toggle switch"];

const Sidebar: React.FC = () => {
    return (
        <div className="sideNav">
            {components.map(component => 
                <a className='links' href={"/uikit/" + component.toLowerCase().split(" ").join("")}>{component}</a>
            )}
        </div>
    )
}

export default Sidebar;