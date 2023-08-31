import { Form } from "react-bootstrap";

interface RadioProps {
    label: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    value?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

const RadioComponent: React.FC<RadioProps> = ({ label, className, id, style, value, disabled, onChange, name }) => {
    return (
        <>
            {disabled ?
                <Form.Check type="radio" label={label} className={className} id={id} style={style} value={value} disabled onChange={onChange} name={name} />
                : <Form.Check type="radio" label={label} className={className} id={id} style={style} value={value}  onChange={onChange} name={name} />
            } 
        </> 
    )
}

export default RadioComponent;