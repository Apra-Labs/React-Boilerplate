import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/home/index'));
const AlertExample = React.lazy(() => import('./pages/ui/examples/AlertExample'));
const ButtonExample = React.lazy(() => import('./pages/ui/examples/ButtonExample'));
const CardExample = React.lazy(() => import('./pages/ui/examples/CardExample'));
const CheckBoxExample = React.lazy(() => import('./pages/ui/examples/CheckBoxExample'));
const DropDownExample = React.lazy(() => import('./pages/ui/examples/DropDownExample'));
const InputFloatingLabelExample = React.lazy(() => import('./pages/ui/examples/InputFloatingLabelExample'));
const ImageExample = React.lazy(() => import('./pages/ui/examples/ImageExample'));
const InputExample = React.lazy(() => import('./pages/ui/examples/InputExample'));
const ModalExample = React.lazy(() => import('./pages/ui/examples/ModalExample'));
const RadioExample = React.lazy(() => import('./pages/ui/examples/RadioExample'));
const SpinnerExample = React.lazy(() => import('./pages/ui/examples/SpinnerExample'));
const ToggleSwitchExample = React.lazy(() => import('./pages/ui/examples/ToggleSwitchExample'));
const ToastExample = React.lazy(() => import('./pages/ui/examples/ToastExample'));
const TextAreaExample = React.lazy(() => import('./pages/ui/examples/TextAreaExample'));
const RowColumnExample = React.lazy(() => import('./pages/ui/examples/RowColumnExample'));
const PageNotFound = React.lazy(() => import('./pages/404/index'));

const Main: React.FC = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path='/uikit/alert' element={<AlertExample />} />
                <Route path='/uikit/button' element={<ButtonExample />} />
                <Route path='/uikit/card' element={<CardExample />} />
                <Route path='/uikit/checkbox' element={<CheckBoxExample />} />
                <Route path='/uikit/dropdown' element={<DropDownExample />} />
                <Route path='/uikit/image' element={<ImageExample />} />
                <Route path='/uikit/input' element={<InputExample />} />
                <Route path='/uikit/inputfloatinglabel' element={<InputFloatingLabelExample />} />
                <Route path='/uikit/modal' element={<ModalExample />} />
                <Route path='/uikit/radio' element={<RadioExample />} />
                <Route path='/uikit/rowcolumn' element={<RowColumnExample />} />
                <Route path='/uikit/spinner' element={<SpinnerExample />} />
                <Route path='/uikit/toggleswitch' element={<ToggleSwitchExample />} />
                <Route path='/uikit/toast' element={<ToastExample />} />
                <Route path='/uikit/textarea' element={<TextAreaExample />} />
                <Route path='/layouts/leftcontainerlayout' element={<Home />} />
                <Route path='/layouts/rightcontainerlayout' element={<Home />} />
                <Route path='/layouts/leftrightcontainerlayout' element={<Home />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default Main;