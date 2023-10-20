import { Outlet } from "react-router-dom";
import { lazy } from "react";
const PageBody = lazy(() => import('../../containers/pageBody'));
const LeftContainerLayout = lazy(() => import('../../layouts/LeftContainerLayout'));
const Sidebar = lazy(() => import('./Sidebar'));

const UiKit: React.FC = () => (
    <div>
        <PageBody body={
            <LeftContainerLayout sideElement={<Sidebar />} />
        } />
        <Outlet />
    </div>
)

export default UiKit;