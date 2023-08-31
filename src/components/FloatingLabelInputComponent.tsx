import { FloatingLabel, Form } from "react-bootstrap";

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
    style: {width: 200, height: 100
    }
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
        <FloatingLabel style={style} label={label} className={className} id={id}>
            <Form.Control type={type} placeholder={placeholder} onChange={onChange}/>
        </FloatingLabel>
    )
}

FloatingLabelInputComponent.defaultProps = defaultProps;
export default FloatingLabelInputComponent;