import { FloatingLabel, Form } from "react-bootstrap";

interface FloatingLabelInputProps {
    label: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    styleFloatingContainer?: React.CSSProperties;
    classNameFloatingContainer?: string;
    idFloatingContainer?: string;
    classNameFloatingInput?: string;
    idFloatingLabel?: string;
    name?: string;
    required?: boolean;
}

const defaultProps: Partial<FloatingLabelInputProps> = {
    type: "text",
    placeholder: "placeholder"
}

const FloatingLabelInputComponent: React.FC<FloatingLabelInputProps> = ({
    label,
    type,
    placeholder,
    onChange,
    styleFloatingContainer,
    classNameFloatingContainer,
    idFloatingContainer,
    classNameFloatingInput,
    name,
    required
}) => {
    return (
        <FloatingLabel
            style={styleFloatingContainer}
            label={label}
            className={classNameFloatingContainer}
            id={idFloatingContainer}
            role="myFloatingLabelInput"
        >
            <Form.Control
                id="floatingInput"
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={classNameFloatingInput}
                name={name}
                required={required}
            />
        </FloatingLabel>
    )
}

FloatingLabelInputComponent.defaultProps = defaultProps;
export default FloatingLabelInputComponent;