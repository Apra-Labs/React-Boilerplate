import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import UIComponents from './pages/ui';

const Main: React.FC = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/components' element={<UIComponents />} />
                <Route path='*' element={<Home />} />
            </Route>
        </Routes>
    )
}

export default Main;