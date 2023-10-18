import styles from './styles/SideContainer.module.css';

interface SideContainerProps {
    alignRight: boolean;
    children: JSX.Element;
    className?: string;
}

const SideContainer: React.FC<SideContainerProps> = ({
    alignRight,
    children,
    className
}) => {
    return (
        <div className={`${(alignRight ? styles.sideColumnRight : styles.sideColumnLeft)} ${className}`}>
            {children}
        </div>
    )
}

export default SideContainer;