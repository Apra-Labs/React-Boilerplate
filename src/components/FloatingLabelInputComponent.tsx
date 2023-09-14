import { FloatingLabel, Form } from "react-bootstrap";
import './styles/FloatingLabelInput.css';

interface FloatingLabelInputProps {
    label: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
}

const defaultProps: Partial<FloatingLabelInputProps> = {
    type: "text",
    placeholder: "placeholder",
    className: "floatingLabelInputClass"
}

const FloatingLabelInputComponent: React.FC<FloatingLabelInputProps> = ({
    label, 
    type, 
    placeholder, 
    onChange, 
    style, 
    className, 
    id
}) => {
    return (
        <FloatingLabel style={style} label={label} className={className} id={id} role="myFloatingLabelInput">
            <Form.Control type={type} placeholder={placeholder} onChange={onChange}/>
        </FloatingLabel>
    )
}

FloatingLabelInputComponent.defaultProps = defaultProps;
export default FloatingLabelInputComponent;