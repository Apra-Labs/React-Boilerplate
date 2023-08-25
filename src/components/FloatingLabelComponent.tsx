import { FloatingLabel, Form } from "react-bootstrap";

interface FloatingLabelProps {
    label: string;
    type: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}

const defaultProps: FloatingLabelProps = {
    label: "email",
    type: "email",
    placeholder: "example@example.com",
    onChange: () => {}
}

const FloatingLabelComponent: React.FC<FloatingLabelProps> = ({label, type, placeholder, onChange, style}) => {
    return (
        <FloatingLabel style={style} label={label}>
            <Form.Control type={type} placeholder={placeholder} onChange={onChange}/>
        </FloatingLabel>
    )
}

FloatingLabelComponent.defaultProps = defaultProps;
export default FloatingLabelComponent;