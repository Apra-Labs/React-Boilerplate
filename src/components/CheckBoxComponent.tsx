import { Form } from "react-bootstrap";

interface CheckBoxProps {
    label: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    value?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

const CheckBoxComponent: React.FC<CheckBoxProps> = ({ label, className, id, style, value, disabled, onChange, name }) => {
    return (
        <>
            {disabled ?
                <Form.Check type="checkbox" label={label} className={className} id={id} style={style} value={value} disabled onChange={onChange} name={name} />
                : <Form.Check type="checkbox" label={label} className={className} id={id} style={style} value={value}  onChange={onChange} name={name} />
            } 
        </> 
    )
}

export default CheckBoxComponent;