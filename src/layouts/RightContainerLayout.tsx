import React from 'react';
const SideContainer = React.lazy(() => import('./SideContainer'));

interface RightContainerLayoutProps {
    sideElement: JSX.Element;
    body?: JSX.Element;
}

const RightContainerLayout: React.FC<RightContainerLayoutProps> = ({ sideElement, body }) => {
    return (
        <div>
            <SideContainer alignRight={true} children={sideElement} />
            {body}
        </div>
    )
}

export default RightContainerLayout;