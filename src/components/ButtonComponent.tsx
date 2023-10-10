import { Button } from "react-bootstrap";
import { buttonVariants } from "../assets/data/customDataType";

interface ButtonProps {
    label: string;
    variant?: buttonVariants;
    title?: string;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

const defaultProps: Partial<ButtonProps> = {
    type: "button",
    variant: "primary",
}

const ButtonComponent: React.FC<ButtonProps> = ({
    label,
    variant,
    style,
    onClick,
    type,
    className,
    title
}) => (
    <Button
        variant={variant}
        style={style}
        onClick={onClick}
        type={type}
        className={className}
        title={title}
        role="myButton"
    >
        {label}
    </Button>
)
ButtonComponent.defaultProps = defaultProps;
export default ButtonComponent;