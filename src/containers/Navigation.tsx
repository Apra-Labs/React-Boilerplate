import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logOut } from '../redux/reducers/authSlice';
import { ToastContainer, toast } from 'react-toastify';

const Navigation: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);

    const loggedIn = useAppSelector((state) => state.authReducer.isLoggedIn);

    useEffect(() => {
        setIsLogin(loggedIn);

        return () => {
            console.log('Component unmounted');
        }
    }, [loggedIn]);

    const { i18n, t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSelectLang = (e: string | null) => {
        const lang_code = e || undefined;
        i18n.changeLanguage(lang_code);
    };

    const handleLogOut = () => {
        dispatch(logOut());
        toast.success("Logged out", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#A8DF8E' }}>
            <Navbar.Brand as={Link} to={"/"} className='text-light'>{t("MyApplication")}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto'>
                    {!isLogin ?
                        <Nav.Link as={Link} to={"/login"} className='text-light'>{t("Login")}</Nav.Link> :
                        <Nav.Link className='text-light' onClick={handleLogOut}>{t("Logout")}</Nav.Link>
                    }
                    <Nav.Link as={Link} to={"/profile"} className='text-light'>{t("Profile")}</Nav.Link>
                    <NavDropdown
                        title={<span className='text-light'>{t("DisplayLanguage")}</span>}
                        id="navbarScrollingDropdown"
                        onSelect={onSelectLang} >
                        <NavDropdown.Item eventKey={"en"}>{t("English")}</NavDropdown.Item>
                        <NavDropdown.Item eventKey={"es"}>{t("Spanish")}</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <ToastContainer />
        </Navbar>
    )
}

export default Navigation;