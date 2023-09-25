import React from "react";
import { Form } from "react-bootstrap";

interface ToggleSwitchProps {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
    name?: string;
}

const defaultProps: Partial<ToggleSwitchProps> = {
    className: "toggleSwitchClass"
}

const ToggleSwitchComponent: React.FC<ToggleSwitchProps> = ({
    label,
    onChange,
    style,
    className,
    id,
    name
}) => {
    return (
        <Form.Check
            id={id}
            type="switch"
            label={label}
            onChange={onChange}
            style={style}
            className={className}
            name={name}
            role="mySwitch"
        />
    )
}

ToggleSwitchComponent.defaultProps = defaultProps;
export default ToggleSwitchComponent;