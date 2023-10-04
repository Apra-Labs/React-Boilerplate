import { Form } from "react-bootstrap";

interface RadioProps {
    label: string;
    className?: string;
    style?: React.CSSProperties;
    value?: string;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    title?: string;
}

const defaultProps: Partial<RadioProps> = {
    disabled: false
}

const RadioComponent: React.FC<RadioProps> = ({
    label,
    className,
    style,
    value,
    disabled,
    onChange,
    name,
    title
}) => (
    <Form.Check
        type="radio"
        label={label}
        className={className}
        style={style}
        value={value}
        onChange={onChange}
        name={name}
        title={title}
        disabled={disabled}
        role="myRadio"
    />
)

RadioComponent.defaultProps = defaultProps;
export default RadioComponent;