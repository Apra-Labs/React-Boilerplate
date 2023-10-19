import { lazy } from "react"
import GetRouteElement from "./GetRouteElement";
const AlertExample = lazy(() => import('../pages/ui/examples/AlertExample'));
const ButtonExample = lazy(() => import('../pages/ui/examples/ButtonExample'));
const CardExample = lazy(() => import('../pages/ui/examples/CardExample'));
const CheckBoxExample = lazy(() => import('../pages/ui/examples/CheckBoxExample'));
const DropDownExample = lazy(() => import('../pages/ui/examples/DropDownExample'));
const ImageExample = lazy(() => import('../pages/ui/examples/ImageExample'));
const InputExample = lazy(() => import('../pages/ui/examples/InputExample'));
const InputFloatingLabelExample = lazy(() => import('../pages/ui/examples/InputFloatingLabelExample'));
const ModalExample = lazy(() => import('../pages/ui/examples/ModalExample'));
const RadioExample = lazy(() => import('../pages/ui/examples/RadioExample'));
const RowColumnExample = lazy(() => import('../pages/ui/examples/RowColumnExample'));
const SpinnerExample = lazy(() => import('../pages/ui/examples/SpinnerExample'));
const TextAreaExample = lazy(() => import('../pages/ui/examples/TextAreaExample'));
const ToastExample = lazy(() => import('../pages/ui/examples/ToastExample'));
const ToggleSwitchExample = lazy(() => import('../pages/ui/examples/ToggleSwitchExample'));

const uiKitRoutes = [
    { path: 'alert', element: GetRouteElement(AlertExample)},
    { path: 'button', element: GetRouteElement(ButtonExample)},
    { path: 'card', element: GetRouteElement(CardExample)},
    { path: 'checkbox', element: GetRouteElement(CheckBoxExample)},
    { path: 'dropdown', element: GetRouteElement(DropDownExample)},
    { path: 'image', element: GetRouteElement(ImageExample)},
    { path: 'input', element: GetRouteElement(InputExample)},
    { path: 'inputfloatinglabel', element: GetRouteElement(InputFloatingLabelExample)},
    { path: 'modal', element: GetRouteElement(ModalExample)},
    { path: 'radio', element: GetRouteElement(RadioExample)},
    { path: 'rowcolumn', element: GetRouteElement(RowColumnExample)},
    { path: 'spinner', element: GetRouteElement(SpinnerExample)},
    { path: 'textarea', element: GetRouteElement(TextAreaExample)},
    { path: 'toast', element: GetRouteElement(ToastExample)},
    { path: 'toggleswitch', element: GetRouteElement(ToggleSwitchExample)},
];

export default uiKitRoutes;