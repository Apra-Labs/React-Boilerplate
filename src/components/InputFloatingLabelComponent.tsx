import { FloatingLabel, Form } from "react-bootstrap";

interface InputFloatingLabelProps {
    label: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    styleFloatingContainer?: React.CSSProperties;
    styleFloatingInput?: React.CSSProperties;
    classNameFloatingContainer?: string;
    classNameFloatingInput?: string;
    name?: string;
    required?: boolean;
}

const defaultProps: Partial<InputFloatingLabelProps> = {
    type: "text",
    placeholder: "placeholder"
}

const InputFloatingLabelComponent: React.FC<InputFloatingLabelProps> = ({
    label,
    type,
    placeholder,
    onChange,
    styleFloatingContainer,
    styleFloatingInput,
    classNameFloatingContainer,
    classNameFloatingInput,
    name,
    required
}) => (
    <FloatingLabel
        style={styleFloatingContainer}
        label={label}
        className={classNameFloatingContainer}
        role="myInputFloatingLabel"
    >
        <Form.Control
            id="floatingInput"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={classNameFloatingInput}
            name={name}
            required={required}
            style={styleFloatingInput}
        />
    </FloatingLabel>
)

InputFloatingLabelComponent.defaultProps = defaultProps;
export default InputFloatingLabelComponent;