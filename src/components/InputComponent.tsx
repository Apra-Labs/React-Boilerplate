import { InputGroup, Form } from "react-bootstrap";

interface InputGroupProps {
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
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
    style,
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
        <InputGroup style={style} className={inputContainerClassName} id={id} role="myInput">
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
                style={textarea ? { height: "10rem" } : {}}
            />
        </InputGroup>
    )
}

InputComponent.defaultProps = defaultProps;
export default InputComponent;