import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logOut, login } from '../redux/reducers/authSlice';
import { toast } from 'react-toastify';
import { Offcanvas } from 'react-bootstrap';
import InputFloatingLabelComponent from '../components/InputFloatingLabelComponent';
import ButtonComponent from '../components/ButtonComponent';
import { faSun, faMoon, faBars, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Navigation.css';
import ModalComponent from '../components/ModalComponent';

const Navigation: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [icon, setIcon] = useState<any>(faSun);
    const [language, setLanguage] = useState<string>('English');

    const loggedIn = useAppSelector((state) => state.authReducer.isLoggedIn);
    const themeIcon = useAppSelector((state) => state.themeIconReducer.icon);
    const location = useLocation();

    useEffect(() => {
        setIsLogin(loggedIn);
        setIcon(themeIcon);

        return () => {
            console.log('Component unmounted');
        }
    }, [loggedIn, location, themeIcon]);

    const { i18n, t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSelectLang = (e: string | null) => {
        const lang_code = e || undefined;
        if (lang_code === "en") {
            setLanguage("English")
        } else {
            setLanguage("español");
        }
        i18n.changeLanguage(lang_code);
    };

    const handleLogOut = () => {
        dispatch(logOut());
        toast.success("Logged out", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleShow = () => {
        setShow(true);
    }

    const changeIcon = () => {
        if (icon === faMoon) {
            setIcon(faSun);
            document.documentElement.setAttribute('data-theme', 'light');
        } else if (icon === faSun) {
            setIcon(faMoon);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === user.email && password === user.password) {
            console.log("Successfully logged in");
            const { name, email, phoneNumber } = user;
            dispatch(login({ name, email, phoneNumber }));
            toast.success('Success!', {
                position: toast.POSITION.TOP_RIGHT
            });
            setShow(false);
        } else {
            console.log("Error");
            toast.error('Error!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const theme = document.documentElement.getAttribute('data-theme');

    const user = {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        password: "john123",
        phoneNumber: "9999997777"
    }

    return (
        <>
            <Navbar expand="lg" className='nav' fixed='top' role='myNavbar'>
                <Navbar.Brand as={Link} to={"/"} className='titleLink'>
                    <img src={require('../assets/images/brand_logo.png')} width={30} height={30} className="d-inline-block align-top" />
                    {" " + t("MyApplication")}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-offcanvas" className='toggleButton'>
                    <FontAwesomeIcon icon={faBars} />
                </Navbar.Toggle>
                <Navbar.Offcanvas id="navbar-offcanvas">
                    <Offcanvas.Header closeButton closeVariant={icon === faSun ? 'white' : ''}>
                        <Offcanvas.Title>
                            <Navbar.Brand as={Link} to={"/"} className='navLink'>{t("MyApplication")}</Navbar.Brand>
                            <button className='themeButtonOnCollapse' onClick={changeIcon}><FontAwesomeIcon icon={icon} /></button>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className='ms-auto'>
                            {location.pathname === "/" ?
                                <>
                                    <Nav.Link as={Link} to={"/uikit/alert"} className='navLink' id='uikitlink'>{t("UiKit")}</Nav.Link>
                                    {!isLogin ?
                                        <Nav.Link className='loginLink' onClick={handleShow}>{t("Login")}</Nav.Link> :
                                        <Nav.Link className='loginLink' onClick={handleLogOut}>{t("Logout")}</Nav.Link>
                                    }
                                    <NavDropdown
                                        title={<span className='navLink'>{language}</span>}
                                        id="navbarScrollingDropdown"
                                        onSelect={onSelectLang} >
                                        <NavDropdown.Item eventKey={"en"} className='navDropdownMenu'>{t("English")}</NavDropdown.Item>
                                        <NavDropdown.Item eventKey={"es"} className='navDropdownMenu'>{t("Spanish")}</NavDropdown.Item>
                                    </NavDropdown>
                                    <button className='themeButton' onClick={changeIcon}><FontAwesomeIcon icon={icon} /></button>
                                </> :
                                <div className='sideLinks'>
                                    <Nav.Link as={Link} active={location.pathname === "/"} to={"/"} className='navLink'>
                                        <span>
                                            <FontAwesomeIcon icon={faArrowLeftLong} />
                                        </span>
                                        {' ' + t("Backtomainmenu")}
                                    </Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/alert"} className='navLink'>{t("Alert")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/button"} className='navLink'>{t("Button")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/card"} className='navLink'>{t("Card")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/checkbox"} className='navLink'>{t("Checkbox")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/dropdown"} className='navLink'>{t("Dropdown")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/inputfloatinglabel"} className='navLink'>{t("InputFloatingLabel")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/image"} className='navLink'>{t("Image")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/input"} className='navLink'>{t("Input")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/modal"} className='navLink'>{t("Modal")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/radio"} className='navLink'>{t("Radio")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/spinner"} className='navLink'>{t("Spinner")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/textarea"} className='navLink'>{t("Textarea")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/toast"} className='navLink'>{t("Toast")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/toggleswitch"} className='navLink'>{t("ToggleSwitch")}</Nav.Link>
                                </div>
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
            <ModalComponent
                show={show}
                onHide={handleClose}
                title={t("Login")}
                body={
                    <>
                        <form onSubmit={handleSubmit}>
                            <InputFloatingLabelComponent
                                label={t("Email")}
                                type='email'
                                placeholder={t("Email")}
                                onChange={handleEmail}
                                classNameFloatingContainer='modalInputContainer'
                                classNameFloatingInput='modalInput'
                            />
                            <InputFloatingLabelComponent
                                label={t("Password")}
                                type='password'
                                placeholder={t("Password")}
                                onChange={handlePassword}
                                classNameFloatingContainer='modalInputContainer'
                                classNameFloatingInput='modalInput'
                            />
                        </form>
                    </>
                }
                footer={
                    <ButtonComponent label={t("Login")} type='submit' className='loginButton' onClick={handleSubmit}/>
                }
                modalHeaderClass='loginHeader'
                modalBodyClass='loginBody'
                modalFooterClass='loginFooter'
                closeVariant={theme === "dark" ? "white" : "black"}
                centered
            />
        </>
    )
}

export default Navigation;