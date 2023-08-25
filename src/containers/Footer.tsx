import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        <Container fluid className="position-absolute bottom-0 bg-secondary">
            <p className="text-center text-light">Apra Labs &copy; 2023</p>
        </Container>
    )
}

export default Footer;