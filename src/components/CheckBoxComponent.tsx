import { Form } from "react-bootstrap";

interface CheckBoxProps {
    label: string;
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    title?: string;
}

const defaultProps: Partial<CheckBoxProps> = {
    title: "This is a checkbox"
}

const CheckBoxComponent: React.FC<CheckBoxProps> = ({
    label,
    className,
    style,
    value,
    disabled,
    onChange,
    name,
    title
}) => (
    <Form.Check
        type="checkbox"
        label={label}
        className={className}
        style={style}
        value={value}
        onChange={onChange}
        name={name}
        title={title}
        disabled={disabled}
        role="myCheckbox"
    />
)

CheckBoxComponent.defaultProps = defaultProps;
export default CheckBoxComponent;