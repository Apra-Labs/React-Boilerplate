import { Alert } from "react-bootstrap";

interface AlertProps {
    message: string;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
    show?: boolean;
    onClose?: () => void;
    style?: React.CSSProperties;
    className?: string;
}

const defaultProps: Partial<AlertProps> = {
    variant: "primary",
}

const AlertComponent: React.FC<AlertProps> = ({
    variant,
    show,
    message,
    onClose,
    style,
    className
}) => (
    <Alert
        show={show}
        variant={variant}
        onClose={onClose}
        dismissible
        style={style}
        className={className}
        role="myAlert"
    >
        {message}
    </Alert>
)

AlertComponent.defaultProps = defaultProps;
export default AlertComponent;