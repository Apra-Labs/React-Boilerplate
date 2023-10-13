import { Outlet } from "react-router-dom";
import Footer from "../../containers/footer/Footer";
import Navigation from "../../containers/navigation/Navigation";
import Sidebar from "./Sidebar";

const UiKit: React.FC = () => (
    <>
        <Navigation />
        <Sidebar />
        <Footer />
        <Outlet />
    </>
)

export default UiKit;