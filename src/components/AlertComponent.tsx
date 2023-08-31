import { Alert } from "react-bootstrap";

interface AlertProps {
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
    show?: boolean;
    message: string;
    onClose?: () => void;
    closeLabel?: string;
    closeVariant?: "white" | undefined;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
}

const AlertComponet: React.FC<AlertProps> = ({
    variant,
    show,
    message,
    onClose,
    closeLabel,
    closeVariant,
    style,
    className,
    id
}) => {
    return (
        <Alert
            show={show}
            variant={variant}
            onClose={onClose}
            closeLabel={closeLabel}
            closeVariant={closeVariant}
            dismissible 
            style={style}
            className={className}
            id={id}
            >
            {message}
        </Alert>
    )
}

export default AlertComponet;