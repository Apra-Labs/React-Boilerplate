import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import GetRouteElement from "./GetRouteElement";
import uiKitRoutes from "./uiKitRoutes";
const App = lazy(() => import('../App'));
const UiKit = lazy(() => import('../pages/ui'));
const Home = lazy(() => import('../pages/home'))
const PageNotFound = lazy(() => import('../pages/404'));
const FormExample = lazy(() => import('../pages/ui/examples/FormExample'));

const Routes = createBrowserRouter([
    { 
        path: '/', 
        element: GetRouteElement(App),
        children: [
            {
                path: '/',
                element: GetRouteElement(Home)
            },
            {
                path: 'uikit',
                element: GetRouteElement(UiKit),
                children: [
                    {
                        path: 'components',
                        element: GetRouteElement(UiKit),
                        children: uiKitRoutes
                    },
                    {
                        path: 'form',
                        element: GetRouteElement(FormExample)
                    },
                ]
            }
        ] 
    },
    { path: '*', element: GetRouteElement(PageNotFound) }
])

export default Routes;