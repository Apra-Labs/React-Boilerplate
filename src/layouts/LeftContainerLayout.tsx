import { lazy } from 'react';
const SideContainer = lazy(() => import('./SideContainer'));

interface LeftContainerLayoutProps {
    sideElement: JSX.Element;
    body?: JSX.Element;
}

const LeftContainerLayout: React.FC<LeftContainerLayoutProps> = ({ sideElement, body }) => {
    return (
        <div>
            <SideContainer alignRight={false} children={sideElement} />
            {body}
        </div>
    )
}

export default LeftContainerLayout;