import React from "react";
import { Form } from "react-bootstrap";

interface ToggleSwitchProps {
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}

const ToggleSwitchComponent: React.FC<ToggleSwitchProps> = ({ label, onChange, style }) => {
    return (
        <Form style={style}>
            <Form.Check id="custom-switch" type="switch" label={label} onChange={onChange} />
        </Form>
    )
}

export default ToggleSwitchComponent;