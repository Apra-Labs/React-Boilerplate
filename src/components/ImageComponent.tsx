import { Image } from "react-bootstrap";
import './styles/Image.css';

interface ImageProps {
    src: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    alt?: string,
    shape?: string
}

const defaultProps: Partial<ImageProps> = {
    className: "imageClass",
    shape: "fluid"
}

const ImageComponent: React.FC<ImageProps> = ({
    src,
    className,
    id,
    style,
    alt,
    shape
}) => {
    const shapeProp = {
        // @ts-ignore
        [shape]: true
    }
    return (
        <Image src={src} className={className} style={style} id={id} alt={alt} role="myImage" {...shapeProp} />
    )
}

ImageComponent.defaultProps = defaultProps;
export default ImageComponent;