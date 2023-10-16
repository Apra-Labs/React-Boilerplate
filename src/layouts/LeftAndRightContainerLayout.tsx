import React from 'react';
import SideContainer from './SideContainer';
import Navigation from '../containers/navigation/Navigation';
import Footer from '../containers/footer/Footer';

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
            <Navigation />
            <SideContainer alignRight={false} children={leftSideElement}/>
            <SideContainer alignRight={true} children={rightSideElement}/>
            <div>
                {body}
            </div>
            <Footer />
        </div>
    )
}

export default LeftAndRightContainerLayout;