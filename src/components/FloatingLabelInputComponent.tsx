import { FloatingLabel, Form } from "react-bootstrap";

interface FloatingLabelInputProps {
    label: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    styleFloatingContainer?: React.CSSProperties;
    styleFloatingInput?: React.CSSProperties;
    classNameFloatingContainer?: string;
    idFloatingContainer?: string;
    classNameFloatingInput?: string;
    idFloatingLabel?: string;
    name?: string;
    required?: boolean;
    textarea?: boolean;
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
    styleFloatingInput,
    classNameFloatingContainer,
    idFloatingContainer,
    classNameFloatingInput,
    name,
    required,
    textarea
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
                as={textarea? "textarea": "input"}
                id="floatingInput"
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={classNameFloatingInput}
                name={name}
                required={required}
                style={textarea ? {...styleFloatingInput, height: "10rem"} : styleFloatingInput}
            />
        </FloatingLabel>
    )
}

FloatingLabelInputComponent.defaultProps = defaultProps;
export default FloatingLabelInputComponent;