import { Outlet } from "react-router-dom";
import React from "react";
import PageBody from "../../containers/pageBody";
const LeftContainerLayout = React.lazy(() => import('../../layouts/LeftContainerLayout'));
const Sidebar = React.lazy(() => import('./Sidebar'));
const Navigation = React.lazy(() => import('../../containers/navigation/Navigation'));
const Footer = React.lazy(() => import('../../containers/footer/Footer'));

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