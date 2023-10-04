import { InputGroup, Form } from "react-bootstrap";

interface InputGroupProps {
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    styleInputContainer?: React.CSSProperties;
    styleInput?: React.CSSProperties;
    value?: string;
    inputContainerClassName?: string;
    inputClassName?: string;
    title?: string;
    name?: string;
    required?: boolean;
}

const defaultProps: InputGroupProps = {
    type: "text",
    placeholder: "example",
    title: "This is input"
}

const InputComponent: React.FC<InputGroupProps> = ({
    type,
    placeholder,
    onChange,
    styleInputContainer,
    styleInput,
    value,
    inputContainerClassName,
    inputClassName,
    title,
    name,
    required
}) => (
    <InputGroup style={styleInputContainer} className={inputContainerClassName} role="myInput">
        <Form.Control
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            title={title}
            className={inputClassName}
            name={name}
            required={required}
            style={styleInput}
        />
    </InputGroup>
)

InputComponent.defaultProps = defaultProps;
export default InputComponent;