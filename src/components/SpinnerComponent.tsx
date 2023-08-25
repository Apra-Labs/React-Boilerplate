import { Spinner } from "react-bootstrap";

interface SpinnerProps {
    animation: "border" | "grow";
    variant: string;
}

const SpinnerComponent: React.FC<SpinnerProps> = ({animation, variant}) => {
    return (
        <Spinner animation={animation} variant={variant} />
    )
}

export default SpinnerComponent;