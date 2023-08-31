import { Spinner } from "react-bootstrap";

interface SpinnerProps {
    animation: "border" | "grow";
    variant?: string;
    size?: "sm" | undefined;
    role?: string;
    fullPage?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const SpinnerComponent: React.FC<SpinnerProps> = ({ animation, variant, size, role, fullPage, className, style }) => {
    return (
        <>
            {fullPage ?
                <div style={{backgroundColor: "white", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 999, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Spinner animation={animation} variant={variant} size={size} role={role} className={className} style={style}/>
                </div> :
                <Spinner animation={animation} variant={variant} size={size} role={role} className={className} style={style}/>
            }
        </>
    )
}

export default SpinnerComponent;