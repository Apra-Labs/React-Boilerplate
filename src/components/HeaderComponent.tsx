import './styles/Header.css';

interface HeaderProps {
    label: string;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
}

const defaultProps: Partial<HeaderProps> = {
    className: 'headerClass'
}

const HeaderComponent: React.FC<HeaderProps> = ({label, style, className, id}) => {
    return (
        <header style={style} className={className} id={id} role='myHeader'>
            <h1>{label}</h1>
        </header>
    )
}

HeaderComponent.defaultProps = defaultProps;
export default HeaderComponent;