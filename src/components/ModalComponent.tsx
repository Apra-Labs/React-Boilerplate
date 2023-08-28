import { Modal } from "react-bootstrap";

interface ModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    body: string;
    footer: string;
}

const ModalComponent: React.FC<ModalProps> = ({ show, onHide, title, body, footer}) => {
    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>{footer}</Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalComponent;