import { Button } from "react-bootstrap";

interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
    title?: string;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    id?: string;
}

const defaultProps: Partial<ButtonProps> = {
    type: "button",
    variant: "primary",
    title: "This is a button",
}

const ButtonComponent: React.FC<ButtonProps> = ({
    label,
    variant,
    style,
    onClick,
    type,
    className,
    id,
    title
}) => {
    return (
        <Button
            variant={variant}
            style={style}
            onClick={onClick}
            type={type}
            className={className}
            id={id}
            title={title}
        >
            {label}
        </Button>
    )
}

ButtonComponent.defaultProps = defaultProps;
export default ButtonComponent;