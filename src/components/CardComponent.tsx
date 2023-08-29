import { Card } from "react-bootstrap";

interface CardProps {
    style: React.CSSProperties;
    variant?: string;
    header?: string;
    title: string;
    subtitle?: string;
    message?: string;
    imgSrc?: string;
}

const CardComponent: React.FC<CardProps> = ({ style, variant, title, message, header, subtitle, imgSrc }) => {
    return (
        <Card bg={variant} style={style} >
            {imgSrc ? <Card.Img variant="top" src={imgSrc} /> :
                <Card.Header>{header}</Card.Header>
            }
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
                <Card.Text>{message}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;