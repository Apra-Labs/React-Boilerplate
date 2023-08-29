import { Button } from "react-bootstrap";

interface ButtonProps {
    buttonLabel: string;//change to button label 
    variant?: string;//optional
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const ButtonComponent: React.FC<ButtonProps> = ({ buttonLabel, variant, style, onClick, type }) => {
    return (
        <Button variant={variant} style={style} onClick={onClick} type={type}>{buttonLabel}</Button>
    )
}

export default ButtonComponent;