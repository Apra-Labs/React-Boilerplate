import { Outlet } from "react-router-dom";
import { lazy } from "react";
import { useAppSelector } from "../../redux/hooks";
const PageBody = lazy(() => import('../../containers/pageBody'));
const LeftContainerLayout = lazy(() => import('../../layouts/LeftContainerLayout'));
const RightContainerLayout = lazy(() => import('../../layouts/RightContainerLayout'));
const Sidebar = lazy(() => import('./Sidebar'));

const UiKit: React.FC = () => {
    const currentLanguage = useAppSelector(state => state.langReducer.language);
    
    return (
        <div>
            {currentLanguage === 'عربي' ?
                <PageBody body={
                    <RightContainerLayout sideElement={<Sidebar />} />
                } /> :
                <PageBody body={
                    <LeftContainerLayout sideElement={<Sidebar />} />
                } />
            }
            <Outlet />
        </div>
    )
}


export default UiKit;