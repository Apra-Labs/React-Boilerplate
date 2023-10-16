import React from 'react';
import SideContainer from './SideContainer';
import Navigation from '../containers/navigation/Navigation';
import Footer from '../containers/footer/Footer';

interface RightContainerLayoutProps {
    sideElement: JSX.Element;
    body?: JSX.Element;
}

const RightContainerLayout: React.FC<RightContainerLayoutProps> = ({sideElement, body}) => {
    return (
        <div>
            <Navigation />
            <SideContainer alignRight={true} children={sideElement}/>
            <div>
                {body}
            </div>
            <Footer />
        </div>
    )
}

export default RightContainerLayout;