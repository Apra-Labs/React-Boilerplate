import { Card } from "react-bootstrap";

interface CardProps {
    style: React.CSSProperties;
    variant: string;
    text: 'light' | 'dark'; 
    header: string;
    title: string;
    desc?: string;
}

const CardComponent:React.FC<CardProps> = ({style, variant, text, title, desc, header}) => {
    return (
        <Card bg={variant} style={style} text={text}>
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;