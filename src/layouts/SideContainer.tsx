import styles from './styles/SideContainer.module.css';

interface SideContainerProps {
    alignRight: boolean;
    children: JSX.Element;
}

const SideContainer: React.FC<SideContainerProps> = ({
    alignRight,
    children
}) => {
    return (
        <div className={alignRight ? styles.sideColumnRight : styles.sideColumnLeft}>
            {children}
        </div>
    )
}

export default SideContainer;