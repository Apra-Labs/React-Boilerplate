import { ToastContainer } from "react-bootstrap";

interface ToastContainerProps {
    position: 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' ,
    children: React.ReactNode
}

const ToastContainerComponent: React.FC<ToastContainerProps> = ({position, children}) => {
    return (
        <ToastContainer position={position} role="myToastContainer">
            {children}
        </ToastContainer>
    )
}

export default ToastContainerComponent;