import Navigation from "../../containers/Navigation";
import Footer from "../../containers/Footer";
import './styles.css';
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/uikit/alert");
    }

    return (
        <>
            <Navigation />
            <div className="description">
                <p className="mainHeading">Reduce development time</p>
                <p className="descSubHeading">with our React Boilerplate</p>
                <p className="featureDesc">
                    Our react boilerplate offers reuseable common components such as button, alerts, inputs etc. It also comes with built in redux toolkit setup.
                    The boilerplate comes with Internationalization support and also login and logout.
                </p>
                <ButtonComponent label="Explore UI Kit" onClick={handleClick} variant="outline-primary"/>
            </div>
            <Footer />
        </>
    )
}

export default Home;