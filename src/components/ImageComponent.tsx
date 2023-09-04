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
    alt?: string
}

const defaultProps: Partial<ImageProps> = {
    style: { height: 300, width: 300, marginLeft: 300, marginTop: 90 },
    rounded: true,
}

const ImageComponent: React.FC<ImageProps> = ({
    src,
    rounded,
    roundedCircle,
    thumbnail,
    fluid,
    className,
    id,
    style,
    alt
}) => {
    return (
        <>
            {rounded && <Image src={src} className={className} style={style} id={id} alt={alt} rounded />}
            {roundedCircle && <Image src={src} className={className} style={style} id={id} alt={alt} roundedCircle />}
            {thumbnail && <Image src={src} className={className} style={style} id={id} alt={alt} thumbnail />}
            {fluid && <Image src={src} className={className} style={style} id={id} alt={alt} fluid />}
        </>
    )
}

ImageComponent.defaultProps = defaultProps;
export default ImageComponent;