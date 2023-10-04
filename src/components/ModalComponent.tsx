import { Modal } from "react-bootstrap";

interface ModalProps {
    show: boolean;
    onHide: () => void;
    title: string;
    body: JSX.Element | string;
    footer?: JSX.Element;
    modalHeaderClass?: string;
    modalBodyClass?: string;
    modalFooterClass?: string;
    centered?: boolean;
    closeVariant?: string | undefined;
    style?: React.CSSProperties;
    fullScreen?: true;
    animation?: boolean;
}

const defaultProps: Partial<ModalProps> = {
    style: { color: 'black' }
}

const ModalComponent: React.FC<ModalProps> = ({
    show,
    onHide,
    title,
    body,
    footer,
    modalHeaderClass,
    modalBodyClass,
    modalFooterClass,
    centered,
    closeVariant,
    style,
    fullScreen,
    animation
}) => (
    <Modal
        show={show}
        onHide={onHide}
        centered={centered}
        style={style}
        fullscreen={fullScreen}
        animation={animation}
    >
        <Modal.Header closeButton closeVariant={closeVariant} className={modalHeaderClass}>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={modalBodyClass}>{body}</Modal.Body>
        <Modal.Footer className={modalFooterClass}>{footer}</Modal.Footer>
    </Modal>
)

ModalComponent.defaultProps = defaultProps;
export default ModalComponent;