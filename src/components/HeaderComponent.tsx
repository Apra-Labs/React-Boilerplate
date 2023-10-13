interface HeaderProps {
    title: string;
    style?: React.CSSProperties;
    className?: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ title, style, className }) => (
    <h1 className={className} style={style} role="myHeader">
        {title}
    </h1>
)

export default HeaderComponent;