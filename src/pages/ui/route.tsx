import React from "react"
import { Route, Routes } from "react-router-dom"
const UiKit = React.lazy(() => import('./index'));
const AlertExample = React.lazy(() => import('./examples/AlertExample'));
const ButtonExample = React.lazy(() => import('./examples/ButtonExample'));
const CardExample = React.lazy(() => import('./examples/CardExample'));
const CheckBoxExample = React.lazy(() => import('./examples/CheckBoxExample'));
const DropDownExample = React.lazy(() => import('./examples/DropDownExample'));
const ImageExample = React.lazy(() => import('./examples/ImageExample'));
const InputExample = React.lazy(() => import('./examples/InputExample'));
const InputFloatingLabelExample = React.lazy(() => import('./examples/InputFloatingLabelExample'));
const ModalExample = React.lazy(() => import('./examples/ModalExample'));
const RadioExample = React.lazy(() => import('./examples/RadioExample'));
const RowColumnExample = React.lazy(() => import('./examples/RowColumnExample'));
const SpinnerExample = React.lazy(() => import('./examples/SpinnerExample'));
const ToggleSwitchExample = React.lazy(() => import('./examples/ToggleSwitchExample'));
const ToastExample = React.lazy(() => import('./examples/ToastExample'));
const TextAreaExample = React.lazy(() => import('./examples/TextAreaExample'));

const UiKitRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<UiKit />}>
                <Route path='components' element={<UiKit />}>
                    <Route path='alert' element={<AlertExample />} />
                    <Route path='button' element={<ButtonExample />} />
                    <Route path='card' element={<CardExample />} />
                    <Route path='checkbox' element={<CheckBoxExample />} />
                    <Route path='dropdown' element={<DropDownExample />} />
                    <Route path='image' element={<ImageExample />} />
                    <Route path='input' element={<InputExample />} />
                    <Route path='inputfloatinglabel' element={<InputFloatingLabelExample />} />
                    <Route path='modal' element={<ModalExample />} />
                    <Route path='radio' element={<RadioExample />} />
                    <Route path='rowcolumn' element={<RowColumnExample />} />
                    <Route path='spinner' element={<SpinnerExample />} />
                    <Route path='toggleswitch' element={<ToggleSwitchExample />} />
                    <Route path='toast' element={<ToastExample />} />
                    <Route path='textarea' element={<TextAreaExample />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default UiKitRoutes;