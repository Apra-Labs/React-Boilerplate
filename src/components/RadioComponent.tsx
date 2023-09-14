import { Form } from "react-bootstrap";
import './styles/Radio.css';

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
    className: "radioClass"
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
            role="myRadio"
        />
    )
}

RadioComponent.defaultProps = defaultProps;
export default RadioComponent;