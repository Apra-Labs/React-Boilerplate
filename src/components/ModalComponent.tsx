import { Modal } from "react-bootstrap";

interface ModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    body: JSX.Element | string;
    footer?: JSX.Element;
    dialogClassName?: string;
}

const ModalComponent: React.FC<ModalProps> = ({ show, onHide, title, body, footer, dialogClassName}) => {
    return (
        <>
            <Modal show={show} onHide={onHide} dialogClassName={dialogClassName}>
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