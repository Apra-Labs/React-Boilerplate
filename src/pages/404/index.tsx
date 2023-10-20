import { lazy } from 'react';
import styles from './styles.module.css';
const Navigation = lazy(() => import('../../containers/navigation/Navigation'));
const Footer = lazy(() => import('../../containers/footer/Footer'));

const PageNotFound: React.FC = () => (
    <div>
        <Navigation />
        <div className={styles.error}>
            <h2 className={styles.errorMessage}>404-Page not found</h2>
        </div>
        <Footer />
    </div>
)

export default PageNotFound;