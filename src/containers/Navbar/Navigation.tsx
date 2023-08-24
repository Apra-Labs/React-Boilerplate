import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


const Navigation: React.FC = () => {
    const { i18n, t } = useTranslation();

    const onChangeLang = (e:string | null ) => {
        const lang_code = e || undefined;
        i18n.changeLanguage(lang_code);
    };

    return (
        <Navbar expand="lg" style={{backgroundColor: '#A8DF8E'}}>
            <Navbar.Brand as={Link} to={"/"}  style={{color: 'white'}}>{t("MyApplication")}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto'>
                    <Nav.Link  as={Link} to={"/login"} style={{color: 'white'}}>{t("Login")}</Nav.Link>
                    <Nav.Link  as={Link} to={"/profile"}  style={{color: 'white'}}>{t("Profile")}</Nav.Link>
                    <NavDropdown title={t("DisplayLanguage")} id="navbarScrollingDropdown" onSelect={onChangeLang}>
                        <NavDropdown.Item eventKey={"en"}>English</NavDropdown.Item>
                        <NavDropdown.Item eventKey={"es"}>Spanish</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;