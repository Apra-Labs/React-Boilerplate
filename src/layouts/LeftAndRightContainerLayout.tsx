import { lazy } from 'react';
const SideContainer = lazy(() => import('./SideContainer'));

interface LeftAndRightContainerLayoutProps {
    leftSideElement: JSX.Element;
    rightSideElement: JSX.Element;
    body?: JSX.Element;
}

const LeftAndRightContainerLayout: React.FC<LeftAndRightContainerLayoutProps> = ({
    leftSideElement,
    rightSideElement,
    body
}) => {
    return (
        <div>
            <SideContainer alignRight={false} children={leftSideElement} />
            {body}
            <SideContainer alignRight={true} children={rightSideElement} />
        </div>
    )
}

export default LeftAndRightContainerLayout;