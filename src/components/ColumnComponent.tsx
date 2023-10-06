import { Col } from "react-bootstrap";

interface ColumnProps {
    xs?: boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number };
    sm?: boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number };
    md?: boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number };
    lg?: boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number };
    xl?: boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number };
    xxl?: boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number };
    children?: JSX.Element[] | JSX.Element;
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