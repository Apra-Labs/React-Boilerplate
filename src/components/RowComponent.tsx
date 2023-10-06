import React from "react";
import { Row } from "react-bootstrap"

interface RowProps {
    xs?: number | 'auto' | { cols: number | 'auto' };
    sm?: number | 'auto' | { cols: number | 'auto' };
    md?: number | 'auto' | { cols: number | 'auto' };
    lg?: number | 'auto' | { cols: number | 'auto' };
    xl?: number | 'auto' | { cols: number | 'auto' };
    xxl?: number | 'auto' | { cols: number | 'auto' };
    children?: JSX.Element[] | JSX.Element;
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