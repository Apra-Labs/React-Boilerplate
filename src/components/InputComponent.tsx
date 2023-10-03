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
    id?: string;
    title?: string;
    name?: string;
    required?: boolean;
    textarea?: boolean;
    //add validation code 
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
    id,
    title,
    name,
    required,
    textarea
}) => {
    return (
        <InputGroup style={styleInputContainer} className={inputContainerClassName} id={id} role="myInput">
            <Form.Control
                as={textarea ? "textarea" : "input"}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                title={title}
                className={inputClassName}
                name={name}
                required={required}
                style={textarea ? {...styleInput, height: "10rem" } : styleInput}
            />
        </InputGroup>
    )
}

InputComponent.defaultProps = defaultProps;
export default InputComponent;