import { Toast } from "react-bootstrap";

interface ToastProps {
    header: JSX.Element | string;
    show?: boolean;
    onClose?: () => void;
    message?: string;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
    delay?: number;
    containerStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    messageStyle?: React.CSSProperties;
    autohide?: boolean;
    animation?: boolean;
    className?: string;
    id?: string;
}

const defaultProps: Partial<ToastProps> = {
    animation: true
}

const ToastComponent: React.FC<ToastProps> = ({
    header,
    message,
    show,
    onClose,
    variant,
    delay,
    autohide,
    animation,
    className,
    id,
    containerStyle,
    headerStyle,
    messageStyle,
}) => {
    return (
        <Toast
            bg={variant}
            show={show}
            onClose={onClose}
            animation={animation}
            delay={delay}
            autohide={autohide}
            className={className}
            id={id}
            style={containerStyle}
            data-testid="toast"
        >
            <Toast.Header style={headerStyle}>{header}</Toast.Header>
            {message && <Toast.Body style={messageStyle}>{message}</Toast.Body>}
        </Toast>
    )
}

ToastComponent.defaultProps = defaultProps;
export default ToastComponent;