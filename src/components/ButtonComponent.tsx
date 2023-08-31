import { Button } from "react-bootstrap";

interface ButtonProps {
    label: string;
    variant?: string;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    id?: string;
}

const defaultProps: ButtonProps = {
    label: "Click",
    type: "button",
}


const ButtonComponent: React.FC<ButtonProps> = ({ label, variant, style, onClick, type, className, id }) => {
    return (
        <Button variant={variant} style={style} onClick={onClick} type={type} className={className} id={id}>{label}</Button>
    )
}

ButtonComponent.defaultProps = defaultProps;
export default ButtonComponent;