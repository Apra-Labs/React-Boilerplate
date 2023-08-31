import { Image } from "react-bootstrap";

interface ImageProps {
    src: string;
    rounded?: boolean;
    roundedCircle?: boolean;
    thumbnail?: boolean;
    fluid?: boolean;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}

const ImageComponent: React.FC<ImageProps> = ({ src, rounded, roundedCircle, thumbnail, fluid, className, id, style}) => {
    return (
        <>
            {rounded && <Image src={src} className={className} style={style} id={id} rounded />}
            {roundedCircle && <Image src={src} className={className} style={style} id={id} roundedCircle />}
            {thumbnail && <Image src={src} className={className} style={style} id={id} thumbnail />}
            {fluid && <Image src={src} className={className} style={style} id={id} fluid />}
        </>
    )
}

export default ImageComponent;