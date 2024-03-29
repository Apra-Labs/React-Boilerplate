import React from 'react';
import styles from './styles.module.css';
const Navigation = React.lazy(() => import('../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../containers/footer/Footer'));

const PageNotFound: React.FC = () => (
    <>
        <Navigation />
        <div className={styles.error}>
            <h2 className={styles.errorMessage}>404-Page not found</h2>
        </div>
        <Footer />
    </>
)

export default PageNotFound;