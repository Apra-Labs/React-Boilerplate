import { Card } from "react-bootstrap";

interface CardProps {
    style?: React.CSSProperties;
    variant?: string;
    header?: string;
    title: string;
    subtitle?: string;
    message?: string;
    imgSrc?: string;
    className?: string;
    id?: string;
}

const defaultProps: CardProps = {
    title: "Card",
    message: "This is my card",
    variant: "primary",
    style: {height: 100, width: 200}
}

const CardComponent: React.FC<CardProps> = ({ style, variant, title, message, header, subtitle, imgSrc, className, id }) => {
    return (
        <Card bg={variant} style={style} text={variant?.toLowerCase() === 'light' ? 'dark' : 'white'} className={className} id={id}>
            <Card.Header>{header}</Card.Header>
            {imgSrc && <Card.Img variant="top" src={imgSrc} /> }
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
                <Card.Text>{message}</Card.Text>
            </Card.Body>
        </Card>
    )
}

CardComponent.defaultProps = defaultProps;
export default CardComponent;