import { InputGroup, Form } from "react-bootstrap";

interface InputGroupProps {
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    value?: string;
    //add validation code 
}

const defaultProps: InputGroupProps = {
    type: "text",
    placeholder: "example",
    style: {width: 200}
}

const InputComponent: React.FC<InputGroupProps> = ({type, placeholder, onChange, style, value}) => {
    return (
        <InputGroup style={style}>
            <Form.Control type={type} placeholder={placeholder} onChange={onChange} value={value} />
        </InputGroup>
    )
}

InputComponent.defaultProps = defaultProps;
export default InputComponent;