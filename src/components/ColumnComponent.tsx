import { Col } from "react-bootstrap";
import { columnTypes } from "../assets/data/customDataType";

interface ColumnProps {
    xs?: columnTypes;
    sm?: columnTypes;
    md?: columnTypes;
    lg?: columnTypes;
    xl?: columnTypes;
    xxl?: columnTypes;
    children?: JSX.Element;
    className?: string;
    style?: React.CSSProperties;
}

const ColumnComponent: React.FC<ColumnProps> = ({
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    children,
    className,
    style
}) => {
    return (
        <Col
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            xxl={xxl}
            className={className}
            style={style}
            role="myCol"
        >
            {children}
        </Col>
    )
}

export default ColumnComponent;