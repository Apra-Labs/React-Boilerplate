import { Alert } from "react-bootstrap";
import './styles/Alert.css';

interface AlertProps {
    message: string;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
    show?: boolean;
    onClose?: () => void;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
}

const defaultProps: Partial<AlertProps> = {
    variant: "primary",
    className: "alertClass"
}

const AlertComponent: React.FC<AlertProps> = ({
    variant,
    show,
    message,
    onClose,
    style,
    className,
    id
}) => {
    return (
        <Alert
            show={show}
            variant={variant}
            onClose={onClose}
            dismissible
            style={style}
            className={className}
            id={id}
            role="myAlert"
        >
            {message}
        </Alert>
    )
}

AlertComponent.defaultProps = defaultProps;
export default AlertComponent;