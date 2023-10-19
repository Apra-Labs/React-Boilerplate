import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import UiKit from "../pages/ui";
import Home from "../pages/home";
import GetRouteElement from "./GetRouteElement";
import uiKitRoutes from "./uiKitRoutes";
const PageNotFound = lazy(() => import('../pages/404'));

const routes = createBrowserRouter([
    { path: '/', element: GetRouteElement(Home) },
    {
        path: 'uikit',
        element: GetRouteElement(UiKit),
        children: [
            {
                path: 'components',
                element: GetRouteElement(UiKit),
                children: uiKitRoutes
            }
        ]
    },
    { path: '*', element: GetRouteElement(PageNotFound) }
])

export default routes;