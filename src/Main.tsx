import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/home/index'));
const UiKitRoutes = React.lazy(() => import('./pages/ui/route'));
const PageNotFound = React.lazy(() => import('./pages/404/index'));

const Main: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/uikit/*' element={<UiKitRoutes/>} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default Main;