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
    title?: string;
}

const defaultProps: Partial<RadioProps> = {
    style: { marginLeft: 300, marginTop: 90 }
}

const RadioComponent: React.FC<RadioProps> = ({
    label,
    className,
    id,
    style,
    value,
    disabled,
    onChange,
    name,
    title
}) => {
    return (
        <Form.Check
            type="radio"
            label={label}
            className={className}
            id={id}
            style={style}
            value={value}
            onChange={onChange}
            name={name}
            title={title}
            disabled={disabled}
        />
    )
}

RadioComponent.defaultProps = defaultProps;
export default RadioComponent;