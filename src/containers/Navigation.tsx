import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logOut } from '../redux/reducers/authSlice';
import { toast } from 'react-toastify';
import { Modal, Offcanvas } from 'react-bootstrap';
import FloatingLabelInputComponent from '../components/FloatingLabelInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import { login } from '../redux/reducers/authSlice';
import ToggleSwitchComponent from '../components/ToggleSwitchComponent';
import { setDark, setLight } from '../redux/reducers/themeSlice';
import './styles/Navigation.css';

const Navigation: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loggedIn = useAppSelector((state) => state.authReducer.isLoggedIn);
    const location = useLocation();

    useEffect(() => {
        setIsLogin(loggedIn);

        return () => {
            console.log('Component unmounted');
        }
    }, [loggedIn, location]);

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

    const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(setDark());
        } else {
            dispatch(setLight());
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
            <Navbar expand="md" style={{ backgroundColor: '#A8DF8E' }} data-bs-theme="light" fixed='top'>
                <Navbar.Brand as={Link} to={"/"} className='text-light'>{t("MyApplication")}</Navbar.Brand>
                <Nav.Link as={Link} to={"/uikit/alert"} className='text-light'>{t("UiKit")}</Nav.Link>
                <Navbar.Toggle aria-controls="navbar-offcanvas" />
                <Navbar.Offcanvas id="navbar-offcanvas" style={{ backgroundColor: '#A8DF8E', left: 0, top: 0, right: 'auto' }}>
                    <Offcanvas.Header closeButton style={{ color: 'white' }}>
                        <Offcanvas.Title>
                            <Navbar.Brand as={Link} to={"/"} className='text-light'>{t("MyApplication")}</Navbar.Brand>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className='ms-auto'>
                            {location.pathname === "/" ?
                                <>
                                    {!isLogin ?
                                        <Nav.Link className='text-light' onClick={handleShow}>{t("Login")}</Nav.Link> :
                                        <Nav.Link className='text-light' onClick={handleLogOut}>{t("Logout")}</Nav.Link>
                                    }
                                    {isLogin &&
                                        <Nav.Link as={Link} to={"/profile"} className='text-light'>{t("Profile")}</Nav.Link>
                                    }
                                    <ToggleSwitchComponent label='Change Theme' onChange={changeTheme} style={{ color: "white", marginTop: 8 }} />
                                    <NavDropdown
                                        title={<span className='text-light'>{t("ChangeLanguage")}</span>}
                                        id="navbarScrollingDropdown"
                                        onSelect={onSelectLang} >
                                        <NavDropdown.Item eventKey={"en"}>{t("English")}</NavDropdown.Item>
                                        <NavDropdown.Item eventKey={"es"}>{t("Spanish")}</NavDropdown.Item>
                                    </NavDropdown>
                                </> :
                                <div className='sideLinks'>
                                    <Nav.Link as={Link} to={"/uikit/alert"} className='text-light'>{t("Alert")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/button"} className='text-light'>{t("Button")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/card"} className='text-light'>{t("Card")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/checkbox"} className='text-light'>{t("Checkbox")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/dropdown"} className='text-light'>{t("Dropdown")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/floatinglabelinput"} className='text-light'>{t("FloatingLabelInput")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/image"} className='text-light'>{t("Image")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/input"} className='text-light'>{t("Input")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/modal"} className='text-light'>{t("Modal")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/radio"} className='text-light'>{t("Radio")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/spinner"} className='text-light'>{t("Spinner")}</Nav.Link>
                                    <Nav.Link as={Link} to={"/uikit/toggleswitch"} className='text-light'>{t("ToggleSwitch")}</Nav.Link>
                                </div>
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
            <Modal show={show} onHide={handleClose} centered>
                <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ marginLeft: 200 }}>{t("Login")}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FloatingLabelInputComponent label={t("Email")} type='email' placeholder={t("Email")} onChange={handleEmail} style={{ margin: 10 }} />
                        <FloatingLabelInputComponent label={t("Password")} type='password' placeholder={t("Password")} onChange={handlePassword} style={{ margin: 10 }} />
                    </Modal.Body>
                    <Modal.Footer className='text-center'>
                        <ButtonComponent label={t("Login")} type='submit' style={{ marginRight: 200 }} />
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default Navigation;