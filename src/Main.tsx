import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AlertExample from './pages/ui/examples/AlertExample';
import ButtonExample from './pages/ui/examples/ButtonExample';
import CardExample from './pages/ui/examples/CardExample';
import CheckBoxExample from './pages/ui/examples/CheckBoxExample';
import DropDownExample from './pages/ui/examples/DropDownExample';
import FloatingLabelInputExample from './pages/ui/examples/FloatingLabelInputExample';
import ImageExample from './pages/ui/examples/ImageExample';
import InputExample from './pages/ui/examples/InputExample';
import ModalExample from './pages/ui/examples/ModalExample';
import RadioExample from './pages/ui/examples/RadioExample';
import SpinnerExample from './pages/ui/examples/SpinnerExample';
import ToggleSwitchExample from './pages/ui/examples/ToggleSwitchExample';
import ToastExample from './pages/ui/examples/ToastExample';

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
                <Route path='/uikit/floatinglabelinput' element={<FloatingLabelInputExample />} />
                <Route path='/uikit/image' element={<ImageExample />} />
                <Route path='/uikit/input' element={<InputExample />} />
                <Route path='/uikit/modal' element={<ModalExample />} />
                <Route path='/uikit/radio' element={<RadioExample />} />
                <Route path='/uikit/spinner' element={<SpinnerExample />} />
                <Route path='/uikit/toggleswitch' element={<ToggleSwitchExample />} />
                <Route path='/uikit/toast' element={<ToastExample />} />
                <Route path='*' element={<Home />} />
            </Route>
        </Routes>
    )
}

export default Main;