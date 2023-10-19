import { Outlet } from "react-router-dom";
import {lazy} from "react";
const PageBody = lazy(() => import('../../containers/pageBody'));
const LeftContainerLayout = lazy(() => import('../../layouts/LeftContainerLayout'));
const Sidebar = lazy(() => import('./Sidebar'));
const Navigation = lazy(() => import('../../containers/navigation/Navigation'));
const Footer = lazy(() => import('../../containers/footer/Footer'));

const UiKit: React.FC = () => (
    <div>
        <Navigation />
        <PageBody body={
            <LeftContainerLayout sideElement={<Sidebar />} />
        } />
        <Footer />
        <Outlet />
    </div>
)

export default UiKit;