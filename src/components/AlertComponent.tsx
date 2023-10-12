import { Alert } from "react-bootstrap";
import { variants } from "../assets/data/customDataType";

interface AlertProps {
    message: string;
    variant?: variants;
    show?: boolean;
    dismissible?: boolean;
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
    dismissible,
    style,
    className
}) => (
    <Alert
        show={show}
        variant={variant}
        onClose={onClose}
        dismissible={dismissible}
        style={style}
        className={className}
        role="myAlert"
    >
        {message}
    </Alert>
)

AlertComponent.defaultProps = defaultProps;
export default AlertComponent;