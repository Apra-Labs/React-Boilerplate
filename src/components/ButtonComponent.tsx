import { Button } from "react-bootstrap";

interface ButtonProps {
    title: string;
    variant: string;
    style?: React.CSSProperties ;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps: ButtonProps = {
    title: "Submit",
    variant: "primary",
    type: "button",
    onClick: () => {}
}

const ButtonComponent: React.FC<ButtonProps> = ({ title, variant, style, onClick, type }) => {
    return (
        <div className="text-center">
            <Button variant={variant} style={style} onClick={onClick} type={type}>{title}</Button>
        </div>
    )
}

ButtonComponent.defaultProps = defaultProps;
export default ButtonComponent;