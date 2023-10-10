import { Image } from "react-bootstrap";
import { imageShapeTypes } from "../assets/data/customDataType";

interface ImageProps {
    src: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    alt?: string,
    shape?: imageShapeTypes 
}

const defaultProps: Partial<ImageProps> = {
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