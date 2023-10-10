import { Toast, ToastContainer } from "react-bootstrap";
import { toastPositionTypes, variants } from "../assets/data/customDataType";

interface ToastProps {
    position: toastPositionTypes,
    messages: {
        header: string,
        message?: string,
        show?: boolean,
        onClose?: () => void,
        variant?: variants,
        delay?: number,
        containerStyle?: React.CSSProperties,
        headerStyle?: React.CSSProperties,
        messageStyle?: React.CSSProperties,
        autohide?: boolean
        animation?: boolean
        className?: string
    }[]
}

const ToastComponent: React.FC<ToastProps> = ({ position, messages }) => (
    <ToastContainer position={position} role="myToastContainer">
        {messages.map((toast) => (
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