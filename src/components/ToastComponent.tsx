import { Toast, ToastContainer } from "react-bootstrap";

interface ToastProps {
    position: 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end',
    toasts: {
        header: string,
        message?: string,
        show?: boolean,
        onClose?: () => void,
        variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark",
        delay?: number,
        containerStyle?: React.CSSProperties,
        headerStyle?: React.CSSProperties,
        messageStyle?: React.CSSProperties,
        autohide?: boolean
        animation?: boolean
        className?: string
    }[]
}

const ToastComponent: React.FC<ToastProps> = ({ position, toasts }) => (
    <ToastContainer position={position} role="myToastContainer">
        {toasts.map((toast) => (
            <Toast
                bg={toast.variant}
                show={toast.show}
                onClose={toast.onClose}
                animation={toast.animation}
                delay={toast.delay}
                autohide={toast.autohide}
                className={toast.className}
                style={toast.containerStyle}
                data-testid="toast"
            >
                <Toast.Header style={toast.headerStyle}>{toast.header}</Toast.Header>
                {toast.message && <Toast.Body style={toast.messageStyle}>{toast.message}</Toast.Body>}
            </Toast>
        ))}
    </ToastContainer>
)

export default ToastComponent;