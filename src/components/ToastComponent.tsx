import { Toast, ToastContainer } from "react-bootstrap";

interface ToastProps {
    header: JSX.Element | string;
    show: boolean;
    onClose: () => void;
    message?: string;
    position?: 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
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
    position: 'top-end',
    animation: true
}

const ToastComponent: React.FC<ToastProps> = ({
    header,
    message,
    show,
    onClose,
    position,
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
        <ToastContainer className={className} id={id} position={position} style={containerStyle}>
            <Toast
                bg={variant}
                show={show}
                onClose={onClose}
                animation={animation}
                delay={delay}
                autohide={autohide}
            >
                <Toast.Header style={headerStyle}>{header}</Toast.Header>
                {message && <Toast.Body style={messageStyle}>{message}</Toast.Body> }
            </Toast>
        </ToastContainer>
    )
}

ToastComponent.defaultProps = defaultProps;
export default ToastComponent;