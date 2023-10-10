import React from "react";
import { Row } from "react-bootstrap"
import { rowTypes } from "../assets/data/customDataType";

interface RowProps {
    xs?: rowTypes;
    sm?: rowTypes;
    md?: rowTypes;
    lg?: rowTypes;
    xl?: rowTypes;
    xxl?: rowTypes;
    children?: JSX.Element;
    className?: string;
    style?: React.CSSProperties;
}

const RowComponent: React.FC<RowProps> = ({
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    children,
    className,
    style
}) => (
    <Row
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        xxl={xxl}
        className={className}
        style={style}
        role="myRow"
    >
        {children}
    </Row>
)

export default RowComponent;