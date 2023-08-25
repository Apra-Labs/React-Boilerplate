import { Dropdown } from "react-bootstrap"

interface DropDownProps {
    variant: string;
    title: string;
    items: string[];
}

const defaultProps: DropDownProps = {
    variant: "success",
    title: "Sample",
    items: ["Sample1", "Sample2", "Sample3"]
}

const DropDownComponent: React.FC<DropDownProps> = ({variant, title, items}) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant={variant}>{title}</Dropdown.Toggle>
            <Dropdown.Menu>
                {items.map(item => <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    )
}

DropDownComponent.defaultProps = defaultProps;
export default DropDownComponent;