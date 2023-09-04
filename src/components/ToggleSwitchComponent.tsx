import React from "react";
import { Form } from "react-bootstrap";
import './styles/ToggleSwitch.css';

interface ToggleSwitchProps {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
}

const defaultProps: Partial<ToggleSwitchProps> = {
    className: "toggleSwitchClass"
}

const ToggleSwitchComponent: React.FC<ToggleSwitchProps> = ({
    label,
    onChange,
    style,
    className,
    id
}) => {
    return (
        <Form style={style} className={className} id={id}>
            <Form.Check id="custom-switch" type="switch" label={label} onChange={onChange} />
        </Form>
    )
}

ToggleSwitchComponent.defaultProps = defaultProps;
export default ToggleSwitchComponent;