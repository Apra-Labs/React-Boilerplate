import { InputGroup, Form } from "react-bootstrap";
import './styles/Input.css';

interface InputGroupProps {
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    value?: string;
    className?: string;
    id?: string;
    title?: string;
    //add validation code 
}

const defaultProps: InputGroupProps = {
    type: "text",
    placeholder: "example",
    title: "This is input",
    className: "inputClass"
}

const InputComponent: React.FC<InputGroupProps> = ({
    type,
    placeholder,
    onChange,
    style,
    value,
    className,
    id,
    title
}) => {
    return (
        <InputGroup style={style} className={className} id={id}>
            <Form.Control type={type} placeholder={placeholder} onChange={onChange} value={value} title={title}/>
        </InputGroup>
    )
}

InputComponent.defaultProps = defaultProps;
export default InputComponent;