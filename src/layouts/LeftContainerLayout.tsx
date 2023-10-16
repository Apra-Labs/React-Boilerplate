import React from 'react';
import SideContainer from './SideContainer';
import Navigation from '../containers/navigation/Navigation';
import Footer from '../containers/footer/Footer';

interface LeftContainerLayoutProps {
    sideElement: JSX.Element;
    body?: JSX.Element;
}

const LeftContainerLayout: React.FC<LeftContainerLayoutProps> = ({ sideElement, body }) => {
    return (
        <div>
            <Navigation />
            <div className='body'>
                <SideContainer alignRight={false} children={sideElement} />
                <div>
                    {body}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LeftContainerLayout;