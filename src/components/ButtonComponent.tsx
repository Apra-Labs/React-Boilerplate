import { Button } from "react-bootstrap";

interface ButtonProps {
    title: string;
    variant: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ title, variant }) => {
    return (
        <Button variant={variant}>{title}</Button>
    )
}

export default ButtonComponent