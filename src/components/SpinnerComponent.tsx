 import { Spinner } from "react-bootstrap";
import './styles/Spinner.css';

interface SpinnerProps {
    animation: "border" | "grow";
    variant?: string;
    size?: "sm" | undefined;
    fullPage?: boolean;
    className?: string;
    style?: React.CSSProperties;
    fullPageStyle?: React.CSSProperties;
    id?: string;
}

const defaultProps: Partial<SpinnerProps> = {
    fullPage: false,
    fullPageStyle: {
        backgroundColor: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.5
    },
    variant: "primary",
    className: "spinnerClass"
}

const SpinnerComponent: React.FC<SpinnerProps> = ({
    animation,
    variant,
    size,
    fullPage,
    className,
    style,
    id,
    fullPageStyle
}) => {
    return (
        <>
            {fullPage ?
                <div style={fullPageStyle}>
                    <Spinner animation={animation} variant={variant} size={size} className={className} style={style} id={id} role="mySpinner"/>
                </div> :
                <Spinner animation={animation} variant={variant} size={size} className={className} style={style} id={id}  role="mySpinner"/>
            }
        </>
    )
}

SpinnerComponent.defaultProps = defaultProps;
export default SpinnerComponent;