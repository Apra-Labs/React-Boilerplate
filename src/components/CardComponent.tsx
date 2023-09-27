import { Card } from "react-bootstrap";

interface CardProps {
    title: string;
    message: string;
    style?: React.CSSProperties;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
    header?: string;
    subtitle?: string;
    imgSrc?: string;
    className?: string;
    id?: string;
    border?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
}

const defaultProps: CardProps = {
    title: "Card",
    message: "This is my card",
    variant: "primary",
    border: "dark"
}

const CardComponent: React.FC<CardProps> = ({
    style,
    variant,
    title,
    message,
    header,
    subtitle,
    imgSrc,
    className,
    id,
    border
}) => {
    return (
        <Card
            bg={variant}
            style={style}
            text={variant?.toLowerCase() === 'light' ? 'dark' : 'white'}
            className={className}
            id={id}
            border={border}
            role="myCard"
        >
            {header && <Card.Header>{header}</Card.Header>}
            {imgSrc && <Card.Img variant="top" src={imgSrc} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
                <Card.Text>{message}</Card.Text>
            </Card.Body>
        </Card>
    )
}

CardComponent.defaultProps = defaultProps;
export default CardComponent;