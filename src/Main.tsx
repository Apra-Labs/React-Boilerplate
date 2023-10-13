import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UiKit from './pages/ui';
import HeaderExample from './pages/ui/examples/HeaderExample';
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
            <Route path='/' element={<Home />} />
            <Route path='uikit' element={<UiKit />} >
                <Route path='alert' element={<AlertExample />} />
                <Route path='button' element={<ButtonExample />} />
                <Route path='card' element={<CardExample />} />
                <Route path='checkbox' element={<CheckBoxExample />} />
                <Route path='dropdown' element={<DropDownExample />} />
                <Route path='header' element={<HeaderExample />} />
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
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default Main;