import { Form, InputGroup } from "react-bootstrap";

interface TextAreaProps {
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    styleTextAreaContainer?: React.CSSProperties;
    styleITextAreaInput?: React.CSSProperties;
    value?: string;
    textAreaContainerClassName?: string;
    textAreaInputClassName?: string;
    title?: string;
    name?: string;
    required?: boolean;
}

const defaultProps: Partial<TextAreaProps> = {
    title: "This is a text area"
}

const TextAreaComponent: React.FC<TextAreaProps> = ({
    placeholder,
    onChange,
    styleITextAreaInput,
    styleTextAreaContainer,
    value,
    textAreaContainerClassName,
    textAreaInputClassName,
    title,
    name,
    required
}) => (
    <InputGroup style={styleTextAreaContainer} className={textAreaContainerClassName} role="myInput">
        <Form.Control
            as={"textarea"}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            title={title}
            className={textAreaInputClassName}
            name={name}
            required={required}
            style={styleITextAreaInput}
        />
    </InputGroup>
);

TextAreaComponent.defaultProps = defaultProps;
export default TextAreaComponent;