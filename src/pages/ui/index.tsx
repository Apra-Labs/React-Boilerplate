import { Outlet } from "react-router-dom";
import React from "react";
const LeftContainerLayout = React.lazy(() => import('../../layouts/LeftContainerLayout'));
const Sidebar = React.lazy(() => import('./Sidebar'));

const UiKit: React.FC = () => (
    <>
        <LeftContainerLayout sideElement={<Sidebar />}/>
        <Outlet />
    </>
)

export default UiKit;