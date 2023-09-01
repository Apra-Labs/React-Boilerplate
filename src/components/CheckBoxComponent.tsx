import { Form } from "react-bootstrap";

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
    style: { marginLeft: 300, marginTop: 50 },
    title: "This is a checkbox"
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
        />
    )
}

CheckBoxComponent.defaultProps = defaultProps;
export default CheckBoxComponent;