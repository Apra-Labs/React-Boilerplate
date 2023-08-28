import { InputGroup, Form } from "react-bootstrap";

interface InputGroupProps {
    type: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    value?: string;
}

const defaultProps: InputGroupProps = {
    type: "text",
    placeholder: "example",
    onChange: () => {}
}

const InputGroupComponent: React.FC<InputGroupProps> = ({type, placeholder, onChange, style, value}) => {
    return (
        <InputGroup style={style}>
            <Form.Control type={type} placeholder={placeholder} onChange={onChange} value={value} />
        </InputGroup>
    )
}

InputGroupComponent.defaultProps = defaultProps;
export default InputGroupComponent;