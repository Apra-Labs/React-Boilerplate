import { Form } from "react-bootstrap";
import './styles/Checkbox.css';

interface CheckBoxProps {
    label: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    value?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    title?: string;
}

const defaultProps: Partial<CheckBoxProps> = {
    title: "This is a checkbox",
    className: "checkboxClass"
}

const CheckBoxComponent: React.FC<CheckBoxProps> = ({
    label,
    className,
    id,
    style,
    value,
    disabled,
    onChange,
    name,

    title
}) => {
    return (
        <Form.Check
            type="checkbox"
            label={label}
            className={className}
            id={id}
            style={style}
            value={value}
            onChange={onChange}
            name={name}
            title={title}
            disabled={disabled}
            role="myCheckbox"
        />
    )
}

CheckBoxComponent.defaultProps = defaultProps;
export default CheckBoxComponent;