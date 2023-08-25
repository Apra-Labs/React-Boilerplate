import { Modal } from "react-bootstrap"

interface ModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    body: string;
}

const ModalComponent: React.FC<ModalProps> = ({ show, onHide, title, body }) => {
    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
            </Modal>
        </>
    )
}

export default ModalComponent;