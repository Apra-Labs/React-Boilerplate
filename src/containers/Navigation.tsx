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
import FloatingLabelInputComponent from '../components/FloatingLabelInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Navigation.css';
import ModalComponent from '../components/ModalComponent';

const Navigation: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [icon, setIcon] = useState<any>(faMoon);

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
        i18n.changeLanguage(lang_code);
    };

    const handleLogOut = () => {
        dispatch(logOut());
        toast.success("Logged out", {
            position: toast.POSITION.TOP_RIGHT //toast from react bootstrap
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
            document.documentElement.setAttribute('data-theme', 'dark');
        } else if (icon === faSun) {
            setIcon(faMoon);
            document.documentElement.setAttribute('data-theme', 'light');
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

    const user = {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        password: "john123",
        phoneNumber: "9999997777"
    }

    return (
        <>
            <Navbar expand="md" className='nav' fixed='top' role='myNavbar'>
                <Navbar.Brand as={Link} to={"/"} className='navLink'>{t("MyApplication")}</Navbar.Brand>
                <Nav.Link as={Link} to={"/uikit/alert"} className='navLink'>{t("UiKit")}</Nav.Link>
                <Navbar.Toggle aria-controls="navbar-offcanvas" />
                <Navbar.Offcanvas id="navbar-offcanvas" style={{ backgroundColor: '#A8DF8E', left: 0, top: 0, right: 'auto' }}>
                    <Offcanvas.Header closeButton style={{ color: 'white' }}>
                        <Offcanvas.Title>
                            <Navbar.Brand as={Link} to={"/"} className='text-light'>{t("MyApplication")}</Navbar.Brand>
                            <button className='themeButtonOnCollapse' onClick={changeIcon}><FontAwesomeIcon icon={icon} /></button>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className='ms-auto'>
                            {location.pathname === "/" ?
                                <>
                                    {!isLogin ?
                                        <Nav.Link className='navLink' onClick={handleShow}>{t("Login")}</Nav.Link> :
                                        <Nav.Link className='navLink' onClick={handleLogOut}>{t("Logout")}</Nav.Link>
                                    }
                                    <NavDropdown
                                        title={<span className='navLink'>{t("ChangeLanguage")}</span>}
                                        id="navbarScrollingDropdown"
                                        onSelect={onSelectLang} >
                                        <NavDropdown.Item eventKey={"en"}>{t("English")}</NavDropdown.Item>
                                        <NavDropdown.Item eventKey={"es"}>{t("Spanish")}</NavDropdown.Item>
                                    </NavDropdown>
                                    <button className='themeButton' onClick={changeIcon}><FontAwesomeIcon icon={icon} /></button>
                                </> :
                                <div className='sideLinks'>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/alert"} to={"/uikit/alert"} className='navLink'>{t("Alert")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/button"} to={"/uikit/button"} className='navLink'>{t("Button")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/card"} to={"/uikit/card"} className='navLink'>{t("Card")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/checkbox"} to={"/uikit/checkbox"} className='navLink'>{t("Checkbox")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/dropdown"} to={"/uikit/dropdown"} className='navLink'>{t("Dropdown")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/floatinglabelinput"} to={"/uikit/floatinglabelinput"} className='navLink'>{t("FloatingLabelInput")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/image"} to={"/uikit/image"} className='navLink'>{t("Image")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/input"} to={"/uikit/input"} className='navLink'>{t("Input")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/modal"} to={"/uikit/modal"} className='navLink'>{t("Modal")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/radio"} to={"/uikit/radio"} className='navLink'>{t("Radio")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/spinner"} to={"/uikit/spinner"} className='navLink'>{t("Spinner")}</Nav.Link>
                                    <Nav.Link as={Link} active={location.pathname === "/uikit/toggleswitch"} to={"/uikit/toggleswitch"} className='navLink'>{t("ToggleSwitch")}</Nav.Link>
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
                        <FloatingLabelInputComponent
                            label={t("Email")}
                            type='email'
                            placeholder={t("Email")}
                            onChange={handleEmail}
                            classNameFloatingContainer='modalInputContainer'
                            classNameFloatingInput='modalInput'
                        />
                        <FloatingLabelInputComponent
                            label={t("Password")}
                            type='password'
                            placeholder={t("Password")}
                            onChange={handlePassword}
                            classNameFloatingContainer='modalInputContainer'
                            classNameFloatingInput='modalInput'
                        />
                    </>
                }
                footer={
                    <ButtonComponent label={t("Login")} type='submit' className='loginButton' onClick={handleSubmit}/>
                }
                modalHeaderClass='loginHeader'
                modalBodyClass='loginBody'
                modalFooterClass='loginFooter'
                centered
            />
        </>
    )
}

export default Navigation;